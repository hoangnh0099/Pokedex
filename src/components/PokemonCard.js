import React, { Component, Fragment } from 'react';
import './PokemonCard';

class PokemonCard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      imageUrl: "",
      pokemonIndex: ""
    }
  }

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex
    });
  }

  render() {

    return (
      <Fragment>
        <div className="card">
          <h5>{this.state.pokemonIndex}</h5>
          <img src={this.state.imageUrl} alt={this.state.name} />
          <h4>{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</h4>
        </div>
      </Fragment>
    )
  }
}

export default PokemonCard;