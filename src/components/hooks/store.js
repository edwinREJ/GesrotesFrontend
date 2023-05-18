import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define el estado inicial
const initialState = {
  estado: true
};

// Define el slice utilizando createSlice
const slice = createSlice({
  name: 'estado',
  initialState,
  reducers: {
    cambiarEstado: state => {
      state.estado = !state.estado;
    }
  }
});

// Crea el store de Redux utilizando configureStore
const store = configureStore({
  reducer: slice.reducer
});

// Exporta el slice y el store
export const { cambiarEstado } = slice.actions;
export default store;



