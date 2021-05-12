import React, { Component } from 'react';
import './CharacterForm.css';

export default class CatForm extends Component {
  state = {
    name: '',
    species: '',
    url: '',
    introduced: 1,
    isNinja: true,
    fightingStyle: ''
  }

  componentDidMount() {
    const { character } = this.props;
    if (!character) { return; }

    this.setState(character);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeSpecies = ({ target }) => {
    this.setState({ species: target.value });
  }

  handleChangeUrl = ({ target }) => {
    this.setState({ url: target.value });
  }

  handleChangeIntroduced = ({ target }) => {
    this.setState({ introduced: target.value });
  }

  handleChangeIsNinja = ({ target }) => {
    this.setState({ isNinja: target.checked });
  }

  handleChangeFightingStyle = ({ target }) => {
    this.setState({ fightingStyle: target.value });
  }



  render() {
    const { name, species, url, introduced, isNinja, fightingStyle } = this.state;
    const { character } = this.props;

    return (
      <form className="CharacterForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Character Name</span>
            <input name="name" required placeholder="Name of Character..." value={name} onChange={this.handleChangeName} />
          </label>
        </p>

        <p>
          <label>
            <span>Character Species</span>
            <input name="species" required placeholder="Species of Character" value={species} onChange={this.handleChangeSpecies} />
          </label>
        </p>

        <p>
          <label>
            <span>URL</span>
            <input name="url" required placeholder="Url to image of character" value={url} onChange={this.handleChangeUrl} />
          </label>
        </p>

        <p>
          <label>
            <span>Game Introduced</span>
            <select name="introduced" required value={introduced} onChange={this.handleChangeIntroduced}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>is Ninja?</span>
            <select name="ninja" required value={isNinja} onChange={this.handleChangeIsNinja}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Fighting Style</span>
            <input name="fighting" required value={fightingStyle} onChange={this.handleChangeFightingStyle} />
          </label>
        </p>

        <p>
          <button>{character ? 'Update' : 'Add'} Character</button>
        </p>


      </form>

    );
  }
}
