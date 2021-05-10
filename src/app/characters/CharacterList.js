import React, { Component } from 'react';
import CharacterItem from './CharacterItem.js';
import './CharacterList.css';

export default class CharacterList extends Component {
  render() {
    const { characters } = this.props;

    return (
      <ul className="CharacterList">
        {characters.map(character => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </ul>


    );
  }
}
