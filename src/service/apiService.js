import axios from "axios";
/* import apiServer from "./endpoints"; */

export async function getAllCards(url) {
  return axios.get(url).then((res) => res.data);
}


export async function getPokemon ( url )
{
  return axios.get( url ).then( ( res ) => { return res.data; } );
}

