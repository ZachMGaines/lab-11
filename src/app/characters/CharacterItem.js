import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharacterItem.css';

export default class CharacterItem extends Component {
  render() {
    const character = this.props.characters;

    return (
      <li>
        <Link to={`/characters/${character.id}`}>
          <h2>{character.name}</h2>
          <img src={character.url} alt={character.name} />
          <p>Fighting Style: {character.fightingStyle}</p>
        </Link>
      </li>
    );
  }
}
