import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slices";
import { counterSlice } from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
});
