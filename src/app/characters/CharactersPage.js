import React, { Component } from 'react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../utils/api.js';
//import './CharacterPage.css';

export default class CharactersPage extends Component {
  state = {
    characters: []
  }

  async componentDidMount() {
    const characters = await getCharacters();
    if (characters) {
      this.setState({ characters: characters });
    }
    else {
      console.log('No Characters Received! Check network tab');
    }
  }
  render() {
    const { characters } = this.state;

    return (
      <div className="CharactersPage">
        <h2>List of Characters</h2>

        <CharacterList characters={characters} />

      </div>
    );
  }
}
