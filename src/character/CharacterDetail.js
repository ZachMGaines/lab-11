import React, { Component } from 'react';
import { getCharacter } from '../utils/api.js';
import './CharacterDetail.css';

export default class CharacterDetail extends Component {
  state = {
    character: null
  }
  async componentDidMount() {
    const { match } = this.props;
    const character = await getCharacter(match.params.id);
    if (character) {
      this.setState({ character: character });
      console.log(character);
    }
    else {
      console.log('No character received. Check id and network tab');
    }
  }

  render() {
    const { character } = this.state;
    if (!character) return null;

    return (
      <div className="CharacterDetail">
        <h2>Character Detail Page</h2>

        <p>Character name: {character.name}</p>
        <p>species: {character.species}</p>
        <p>Game Introduced: {character.introduced}</p>
        <p>Is Ninja?: {String(character.isNinja)}</p>
        <p>Fighting Style: {character.fightingStyle}</p>

      </div>
    );
  }
}
