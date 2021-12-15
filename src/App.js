import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink data-testid="film-link">Films</NavLink>
          <NavLink data-testid="char-link">Characters</NavLink>
        </header>
        {
          // <Switch>
          //   <Route path="/films"><FilmList films={films} /></Route>
          //   <Route path="/characters">
          //     <CharacterList character={character}></CharacterList>
          //   </Route>
          // </Switch>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
