import React, { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { getPokemons } from "./store/slices/pokemon";
import { AppDispatch, RootState } from "./store/types";
import { useSelector } from "react-redux";

import "./App.css";

export const PokemonApp: React.FC = () => {
  const { isLoading, pokemons, page } = useSelector(
    (state: RootState) => state.pokemon
  );
  const dispatch = useAppDispatch();

  const loadPokemons = (page: number = 0) => {
    dispatch(getPokemons(page) as AppDispatch);
  };

  useEffect(() => loadPokemons(), []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span> Loading : {isLoading ? "True" : "False"} </span>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}> {pokemon.name} </li>
        ))}
      </ul>
      <button onClick={() => loadPokemons(page)} disabled={isLoading}>
        Next
      </button>
    </>
  );
};
