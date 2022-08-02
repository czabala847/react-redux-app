export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonState {
  page: number;
  pokemons: Pokemon[];
  isLoading: boolean;
}

export interface SetPokemonPayload extends Omit<PokemonState, "isLoading"> {}
