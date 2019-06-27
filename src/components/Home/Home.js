import React, { Component, Fragment } from 'react';
import './Home.css';
import axios from 'axios';

import PokemonCard from './../PokemonCard/PokemonCard';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100",
      pokemons: []
    }
  }

  // Get data from API
  componentDidMount() {
    axios.get(this.state.url)
      .then(res => {
        this.setState({ pokemons: res.data.results });
      });
  };

  render() {
    const { pokemons } = this.state;
    return (
      <Fragment>
        <header>
          <h1>Pokedex</h1>
        </header>
        <div className="card-area">
          {
            pokemons.map((pokemon, index) => {
              return (
                <PokemonCard
                  key={index}
                  name={pokemon.name}
                  url={pokemon.url} />
              )
            })
          }
        </div>
      </Fragment>
    )
  }
}

export default Home;