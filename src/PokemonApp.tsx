import React, { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { getPokemons } from "./store/slices/pokemon";
import { AppDispatch } from "./store/types";

import "./App.css";

export const PokemonApp: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemons() as AppDispatch);
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  );
};
