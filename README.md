# React con Redux Toolkit

En este repositorio se implementan las bases para empezar a utilizar Redux Toolkit en cualquier proyecto de React JS, gracias a esta herramienta el uso de Redux para manejar el estado global de nuestras aplicaciones es sumamente sencillo.

## Primeros pasos 🥇

Todo lo mencionado se encuentra detallado de manera muy precisa en la documentación oficial de [Redux Toolkit](https://redux-toolkit.js.org/tutorials/quick-start), se estará utilizando Typescript para manejar el tipado, igualmente para Javascript Vanilla, todo esta es la documentación oficial.

### Instalación 📥

`npm install @reduxjs/toolkit react-redux`

### Crear el **Store** ⚙

Lo ideal es crear una carpeta llamada store dentro de src, dentro de esa carpeta crear un archivo con el mismo nombre, que contendrá el siguiente código:

```typescript
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch``
```

Los tipados que se encuentran al final se pueden mover a un archivo aparte donde se manejen los tipos.

### Conectar la aplicación con el store 🔗

Para esto se debe proveer el estado en el punto más alto de la aplicación, en este caso el main.tsx o el index.tsx

```typescript
import { Provider } from "react-redux";

...

<Provider store={store}>
    <App />
</Provider>,

```

## Crear **Slices** 🗄

Plantilla base para crear un slice, el cual contendra los reducer y action para modificar el estado global.

```typescript
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
```

### Añadir el **slice** al **store** 🛒

Solo basta con añadir el reducer de los slices dentro del objeto reducer del estado

```typescript
 reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
```

## Uso del estado

Tenemos 2 custom hooks que nos ayudarán a utilizar nuestro estado en cualquier componente el **useSelector** y el **useDispatch**, con el primero podemos acceder a los elementos del estado y el segundo se utilizara para "despachar" o ejecutar los actions que se crearon en los reducers de los slices.

```typescript
import { useDispatch, useSelector } from "react-redux";

...

export const App = () => {
  const { value } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  ...

  return (
    <>
        <p>{value}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
    </>
  )
}
```

En la aplicación también hay ejemplos para usar **thunks** para peticiones asíncronas y el uso de RTK Query también para el uso de peticiones en las que tenemos muchas ventajas como crear endpoint personalizados y guardar el resultado de una petición en caché por cierto tiempo para no volver a realizar peticiones al servidor.
