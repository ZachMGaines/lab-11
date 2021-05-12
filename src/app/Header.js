import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <h1>Mortal Kombat Characters</h1>

        <nav>
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/characters" exact={true}>Characters</NavLink>
          <NavLink to="/characters/add" exact={true}>Add Character</NavLink>
        </nav>
      </header>
    );
  }

}

export default Header;
