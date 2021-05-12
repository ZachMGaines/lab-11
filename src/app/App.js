import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import CharactersPage from './characters/CharactersPage.js';
import CharacterDetail from '../character/CharacterDetail.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import CharacterAddPage from '../character-add/CharacterAddPage';
import CharacterEditPage from '../character-edit/CharacterEditPage';


class App extends Component {



  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/characters" exact={true}
                render={routerProps => (
                  <CharactersPage {...routerProps} />
                )}
              />

              <Route path="/characters/add" exact={true}
                render={routerProps => (
                  <CharacterAddPage {...routerProps} />
                )}
              />

              <Route path="/characters/:id"
                render={routerProps => (
                  <CharacterDetail {...routerProps} />
                )}
              />

              <Route path="/characters/:id/edit" exact={true}
                render={routerProps => (
                  <CharacterEditPage {...routerProps} />
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;
