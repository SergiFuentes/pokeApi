import { useEffect, useState } from "react";
import { getAllCards } from "../../service";
import { Card } from "../Card/Card.jsx";

export function CardGrid() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getAllCards().then((response) => setPokemons(response));
  },[]);
  return (
    <h1>
      {products.map((pokemon) => (
        <Card pokemon={pokemon} key={pokemon.id} />
      ))}
    </h1>
  );
}