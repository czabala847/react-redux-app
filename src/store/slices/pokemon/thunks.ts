import { AppDispatch, RootState } from "../../types";
import { startLoadingPokemon } from "./pokemonSlice";

export const getPokemons = (page: number = 0) => {
  return async (dispatch: AppDispatch, getState: RootState) => {
    dispatch(startLoadingPokemon());
  };
};
