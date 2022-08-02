import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PokemonState, SetPokemonPayload } from "./Pokemon.interface";

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

    setPokemons: (state, action: PayloadAction<SetPokemonPayload>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions;
