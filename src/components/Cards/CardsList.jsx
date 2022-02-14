import { useEffect, useState } from "react";
import { getAllCards } from "../../service/apiService.js";
import { Card } from "../Card/Card.jsx";

export function CardList() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getAllCards().then((response) => setPokemons(response.results));
  }, [] );



    
  return (
    <div className="cardList">
      {pokemons.map((pokemon) => (
        <Card pokemon={pokemon} key={pokemon.index} />
      ))}
    </div>
  );
}