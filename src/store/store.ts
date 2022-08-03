import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./apis/todoApi";
import { pokemonSlice } from "./slices";
import { counterSlice } from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  // Agregar el middleware api habilita el almacenamiento en caché, la invalidación, el sondeo,
  // y otras funciones útiles de `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
