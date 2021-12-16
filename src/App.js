import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Characters from './views/Characters/Characters';
import Films from './views/Films/Films';
import Books from './views/Books/Books';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/" data-testid="home-link">
            Home
          </NavLink>

          <NavLink data-testid="film-link" to="/Films">
            Films
          </NavLink>

          <NavLink to="/Characters" data-testid="char-link">
            Characters
          </NavLink>

          <NavLink to="/Books" data-testid="book-link">
            Books
          </NavLink>
        </header>
        {
          <Switch>
            <Route path="/films">
              <Films />
            </Route>
            <Route path="/Characters">
              <Characters />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
          </Switch>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
