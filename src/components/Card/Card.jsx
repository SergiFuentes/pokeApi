/* import axios from "axios"; */
import { useEffect, useState } from "react";
import { getPokemon } from "../../service/apiService";
import './Card.css';

export function Card(props) {
  const [pokemonImg, setPokemonImg] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    getPokemon(props.pokemon.url).then((pokeData) => {
      setPokemonImg(pokeData.sprites.other.dream_world.front_default);
      /* axios
      .get(props.pokemon.url)
      .then((res) =>
        setPokemonImg(res.data.sprites.other.dream_world.front_default)
      ); */
      setPokemonName(pokeData.name);
    });
  }, [props]);

  return (
    <div className="card">
      <div className="cardImage">
        <img className="pokemonImage" src={pokemonImg} alt={pokemonName} />
      </div>
      <div className="cardName">
        <button id="viewButton">VIEW</button>
        <p className="pokemonNameTitle">Pokemon name: </p>
        <h1 className="pokemonName">{pokemonName}</h1>
      </div>
    </div>
  );
}