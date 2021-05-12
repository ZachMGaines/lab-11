import React, { Component } from 'react';
import { deletCharacter, getCharacter } from '../utils/api.js';
import './CharacterDetail.css';
import Loader from '../common/Loader';
import { Link } from 'react-router-dom';

export default class CharacterDetail extends Component {
  state = {
    character: null,
    loading: true
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

  handleDelete = async () => {
    const { character } = this.state;
    const { history } = this.props;

    const confirmation = `Are you sure you want to delete ${character.name}?`;
    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading: true });
      await deletCharacter(character.id);
      history.push('/characters');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }


  render() {
    const { character, loading } = this.state;
    if (!character) return null;

    return (
      <div className="CharacterDetail">

        <Loader loading={loading} />

        <h2>Character Detail Page</h2>

        {/* <img src={character.url} alt={character.name} /> */}

        <p>Character name: {character.name}</p>
        <p>species: {character.species}</p>
        <p>Game Introduced: {character.introduced}</p>
        <p>Is Ninja?: {String(character.isNinja)}</p>
        <p>Fighting Style: {character.fightingStyle}</p>

        <Link to={`/characters/${character.id}/edit`}>Edit this Character</Link>

        <button className="delete" onClick={this.handleDelete}>
          Delete this Character
        </button>

      </div>
    );
  }
}
