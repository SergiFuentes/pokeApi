import axios from "axios";
import { useEffect, useState } from "react";

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
        <img src={pokemonImg} alt={props.pokemon.name} />
      </div>
      <div className="cardName">
        <p>Pokemon name: </p>
        <h1>{props.pokemon.name}</h1>
      </div>
    </div>
  );
}