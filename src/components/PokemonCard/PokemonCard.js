import React, { Component, Fragment } from 'react';
import './PokemonCard.css';
import { Link } from 'react-router-dom';

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
          <div className="card-header">
            <h4>{this.state.pokemonIndex}. {this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</h4>
          </div>
          <img className="pokeball" src="https://img.icons8.com/color/48/000000/pokeball-2.png" alt="" />
          <Link to={`/pokemon/${this.state.pokemonIndex}/${this.state.name}`}>
            <img className="pokemon" src={this.state.imageUrl} alt={this.state.name} />
          </Link>
        </div>
      </Fragment>
    )
  }
}

export default PokemonCard;