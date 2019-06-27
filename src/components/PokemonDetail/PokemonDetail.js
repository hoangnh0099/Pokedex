import React, { Component } from 'react';
import './PokemonDetail.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PokemonDetail extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      types: [],
      stats: []
    }
  }

  componentWillMount() {
    // console.log(this.props.match.params);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}/`)
      .then(res => {
        this.setState({
          pokemons: res.data,
          types: res.data.types,
          stats: res.data.stats
        });
      });
  }

  render() {
    const id = this.props.match.params.id;
    const { name, weight, height } = this.state.pokemons;
    console.log(this.state.pokemons);
    return (
      <div className="PokemonDetail">
        <div className="pokemon-info">
          <div className="pokemon-avatar">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
          </div>
          <div className="pokemon-detail">
            <h1>{name}</h1>
            <div className="type-area">
              {
                this.state.types.map((type, index) => {
                  return (
                    <div className="type" key={index}>{type.type.name}</div>
                  )
                })
              }
            </div>
            <div className="stats">
              <table>
                <tbody>
                  {
                    this.state.stats.map((stat, index) => {
                      return (
                        <tr key={index}>
                          <td>{stat.stat.name}</td>
                          <td className="bar"><div className="info-bar" style={{width: `${stat.base_stat}%`}}>{stat.base_stat}</div></td>
                        </tr>
                      )
                    })
                  }
                  <tr>
                    <td>Height:</td>
                    <td><p> {height}</p></td>
                  </tr>
                  <tr>
                    <td>Weight:</td>
                    <td><p> {weight}</p></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><Link to="/">Back to home</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default PokemonDetail;