import React, { Component } from 'react';
import './Navbar.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Component
import PokemonDetail from './../PokemonDetail/PokemonDetail';
import Home from './../Home/Home';

class Navbar extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon/:id/:name" exact component={PokemonDetail} />
      </BrowserRouter>
    )
  }
}

export default Navbar;