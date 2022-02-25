import { useEffect, useState } from "react";
import { getPokemon } from "../../service/apiService";
import './DetailedCard.css';

export function DetailedCard(props) {
  const [pokemonImg, setPokemonImg] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonHeight, setPokemonHeight] = useState("");
  const [pokemonWeight, setPokemonWeight] = useState("");

  useEffect(() => {
    getPokemon(props.pokemon.url).then((pokeData) => {
      setPokemonImg(pokeData.sprites.other.dream_world.front_default);
      setPokemonName( pokeData.name );
      setPokemonHeight( pokeData.height );
      setPokemonWeight( pokeData.weight );
      console.log( pokeData );
    });
  }, [props]);

  return (
    <div className="detailedCard">
      <div className="detailedCardImage">
        <img className="pokemonImage" src={pokemonImg} alt={pokemonName} />
      </div>
      <div className="detailedCardName">
        <button id="viewButton">VIEW</button>
        <p className="pokemonNameTitle">Pokemon name: </p>
        <h1 className="pokemonName">{pokemonName}</h1>
        <p className="pokemonHeightTitle">Height: </p>
        <h1 className="pokemonHeight">{pokemonHeight}</h1>
        <p className="pokemonNameWeight">Wheight: </p>
        <h1 className="pokemonWeight">{pokemonWeight}</h1>
      </div>
    </div>
  );
}