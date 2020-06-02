import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Link, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import HomeView from './views/HomeView';
import ListView from './views/ListView';
import SingleBeer from './views/SingleBeer';
import NewBeer from './views/NewBeer';
import RandomBeers from './views/RandomBeers';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/newBeer" exact component={NewBeer} />
        <Route path="/random" exact component={RandomBeers} />
        <Route path="/beers" exact component={ListView} />
        <Route path="/:id" exact component={SingleBeer} />

        <Route path="/" component={HomeView} />
      </Switch>
    </div>
  );
}

export default App;
