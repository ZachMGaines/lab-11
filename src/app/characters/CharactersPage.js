import React, { Component } from 'react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../utils/api.js';
import Loader from '../common/Loader.js';
import './CharacterPage.css';

export default class CharactersPage extends Component {
  state = {
    characters: []
    loading: true
  }

  async componentDidMount() {
    try {
      const characters = await getCharacters();
      this.setState({ characters: characters });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false })
    }
  }
  render() {
    const { characters, loading } = this.state;

    return (
      <div className="CharactersPage">
        <Loader loading={loading} />

        <h2>List of Characters</h2>

        <CharacterList characters={characters} />

      </div>
    );
  }
}
