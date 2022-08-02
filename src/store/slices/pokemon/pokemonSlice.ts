import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PokemonState {
  page: number;
  pokemons: unknown[];
  isLoading: boolean;
}

const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemon: (state) => {
      state.isLoading = true;
    },

    setPokemons: (state, action: PayloadAction<unknown[]>) => {
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions;
