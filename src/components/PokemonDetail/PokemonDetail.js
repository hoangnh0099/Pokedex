import React, { Component } from 'react';
import './PokemonDetail.css';
import axios from 'axios';

class PokemonDetail extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      types: {}
    }
  }

  componentWillMount() {
    // console.log(this.props.match.params);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}/`)
      .then(res => {
        this.setState({
          pokemons: res.data,
          types: res.data.types
        });
      });
  }

  render() {
    const id = this.props.match.params.id;
    const { name, weight } = this.state.pokemons;
    console.log(this.state.pokemons);
    return (
      <div className="PokemonDetail">
        <div className="pokemon-info">
          <div className="pokemon-avatar">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
          </div>
          <div className="pokemon-detail">
            <h3>{name}</h3>
            <div className="type-area">
              {
                // Array.isArray(this.state.types) && this.state.types.length > 0 &&
                // this.state.types.map(item => {
                //   console.log(item.type.name)
                // })
                Array.isArray(this.state.types) && this.state.types.map((type, index) => {
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
                    Array.isArray(this.state.pokemons.stats) && this.state.pokemons.stats.map((stat, index) => {
                      return (
                        <tr key={index}>
                          <td>{stat.stat.name}</td>
                          <td className="bar"><div className="info-bar" style={{width: `${stat.base_stat}%`}}>{stat.base_stat}</div></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <p>Weight: {weight}</p>
          </div>
        </div>
      </div >
    )
  }
}

export default PokemonDetail;