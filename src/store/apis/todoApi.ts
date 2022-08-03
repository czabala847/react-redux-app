import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], string>({
      query: () => `/todos`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery } = todosApi;
