import axios from "axios";
import apiServer from "./endpoints";

export async function getAllCards ()
{
    return axios.get( apiServer ).then( ( res ) => res.data );
    
}


export async function getPokemonArray ()
{
    return axios.get( apiServer ).then( ( res ) =>res.data.results[0].url);
}

export async function getPokemonUrl ()
{
   getPokemonArray().then( ( res ) =>console.log(res));
}
