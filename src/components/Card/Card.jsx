import axios from "axios";
import { useEffect, useState } from "react";
import './Card.css';

export function Card(props) {
  const [pokemonImg, setPokemonImg] = useState([]);

  useEffect(() => {
    axios
      .get(props.pokemon.url)
      .then((res) =>
        setPokemonImg(res.data.sprites.other.dream_world.front_default)
      );
  });

  return (
    <div className="card">
      <div className="cardImage">
        <img className="pokemonImage" src={pokemonImg} alt={props.pokemon.name} />
      </div>
      <div className="cardName">
        <p className="pokemonNameTitle">Pokemon name: </p>
        <h1 className="pokemonName">{props.pokemon.name}</h1>
      </div>
    </div>
  );
}