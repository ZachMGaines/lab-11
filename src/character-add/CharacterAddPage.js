import React, { Component } from 'react';
import CharacterForm from '../common/CharacterForm.js';
import { addCharacter } from '../utils/api.js';
import './CharacterAddPage.css';

export default class CharacterAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async characterToAdd => {
    const { history } = this.props;


    try {
      this.setState({ loading: true });
      const newCharacter = await addCharacter(characterToAdd);
      history.pushState(`characters/${newCharacter.id}`);
    }
    catch (err) {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="CharacterAdd">
        <h2>Add a Character</h2>
        <CharacterForm onSubmit={this.handleAdd} />

      </div>
    );
  }
}
