import apiServer from "../service/endpoints";
import { useState, useEffect } from "react";
import { getAllCards } from "../service/apiService";

export const useCardsList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualPage, setActualPage] = useState(apiServer);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    setLoading(true);

    getAllCards(actualPage).then((res) => {
      setPokemon(res.results);
      setNextPage(res.next);
      setPrevPage(res.previous);
      setLoading(false);
    });
  }, [actualPage]);

  return {
    pokemon,
    loading,
    actualPage,
    nextPage,
    prevPage,
    methods: {
      setActualPage,
    },
  };
};
