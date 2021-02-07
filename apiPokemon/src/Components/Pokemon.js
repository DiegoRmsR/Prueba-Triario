import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Pokemon = () => {
  const [pokemonId, setpokemonId] = useState()
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      setPokemon(res.data)
    }
    fetchData();
  }, []);
  console.log(pokemon)
  console.log(pokemonId)
  return (
    <div>
      <div>
        <input type="number" name="name" onChange={(event) => {
          setpokemonId(event.target.value)
        }} />
        <button>Enter a number</button>
      </div>
    </div>
  )
}
export default Pokemon;