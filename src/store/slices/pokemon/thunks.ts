import { pokemonApi } from "../../../api/PokemonApi";
import { AppDispatch, RootState } from "../../types";
import { PokemonResponse } from "./Pokemon.interface";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice";

export const getPokemons = (page: number = 0) => {
  return async (dispatch: AppDispatch, getState: RootState) => {
    dispatch(startLoadingPokemon());

    // const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${
    //   page * 10
    // }`;
    // const response: Response = await fetch(url);
    // const data: PokemonResponse = await response.json();

    const url = `/pokemon?limit=10&offset=${page * 10}`;
    const response = await pokemonApi.get(url);
    const data: PokemonResponse = response.data;

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
