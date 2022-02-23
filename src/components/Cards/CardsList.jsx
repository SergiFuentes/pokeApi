import axios from "axios";
import { useEffect, useState } from "react";
import apiServer from "../../service/endpoints.js";
import { Card } from "../Card/Card.jsx";
import './CardsList.css';

export function CardsList() {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState([apiServer]);
  const [pokePrev, setPokePrev] = useState([pokemons]);
  const [pokeNext, setPokeNext] = useState([pokemons]);
  useEffect(() => {
      axios
          .get( url )
          .then( ( response ) => setPokemons( response.data.results ) );
      axios
          .get( url )
          .then( ( response ) => setPokePrev( response.data.previous ) );
      axios
        .get( url )
        .then( ( response ) => setPokeNext( response.data.next ) );
  }, [url]);

  return (
    <div>
      <div className="pokePage">
        <button
          id="prevButton"
          onClick={function prevUrl() {
            axios
              .get(pokePrev)
              .then((response) => setPokemons(response.data.results));
            setUrl(pokePrev);
          }}>
          PREVIOUS
        </button>
        <button
          id="nextButton"
          onClick={function nextUrl() {
            axios
              .get(pokeNext)
              .then((response) => setPokemons(response.data.results));
            setUrl(pokeNext);
          }}>
          NEXT
        </button>
        <button id="pokemonPage">{pokePrev}</button>
      </div>
      <div id="cardsList" className="cardsList">
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.index} />
        ))}
      </div>
    </div>
  );
}