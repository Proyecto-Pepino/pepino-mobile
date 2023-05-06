import {  createSlice } from '@reduxjs/toolkit';

const listOfProductsSlice = createSlice({
    name: 'familyProducts',
    initialState:  [
      "Frutas y Verduras",
       "Carnicería",
       "Carnes",
      "Galletitas",
       "Bebidas",
      "Lácteos",
    ],
    reducers: {
      addElement: (state, action) => {
        state.push(action.payload);
      },
      removeElement: (state, action) => {
        return state.filter(item => item.id !== action.payload.id);
      },
      updateElement: (state, action) => {
        return state.map(item => {
            if (item.id === action.payload.id) {
                return action.payload;
            } else {
                return item;
            }
        })}
    },
  });
  


  export const { addElement, removeElement, updateElement } = listOfProductsSlice.actions;
  export default listOfProductsSlice.reducer;
