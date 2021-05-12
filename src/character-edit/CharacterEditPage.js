import React, { Component } from 'react';
import CharacterForm from '../common/CharacterForm.js';
import { getCharacter, updateCharacter } from '../utils/api.js';
import './CharacterEditPage.css';

export default class CharacterEditPage extends Component {
  state = {
    character: null,
    laoding: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const character = await getCharacter(match.params.id);
      this.setState({ character: character });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleUpdate = async character => {
    const { history } = this.props;


    try {
      this.setState({ loading: true });
      const updatedCharacter = await updateCharacter(character);
      history.push(`/characters/${updatedCharacter.id}`);
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { character } = this.state;
    return (
      <div className="CharacterEditPage">
        <h2>Edit Character</h2>

        {character && <CharacterForm character={character} onSubmit={this.handleUpdate} />}

      </div>
    );
  }
}
