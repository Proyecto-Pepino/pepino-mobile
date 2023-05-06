import {  createSlice } from '@reduxjs/toolkit';

const OfferProductsSlice = createSlice({
    name: 'OfferProducts',
    initialState:  [
         "2 x 1 en café Arlistán",
         "2da unidad al 70% en Pepsi 1.5Lts",
         "2 pizzas + 3 Heineken x 1ts",
    ],
    reducers: {
      addOfferElement: (state, action) => {
        state.push(action.payload);
      },
      removeOfferElement: (state, action) => {
        return state.filter(item => item.id !== action.payload.id);
      },
      updateOfferElement: (state, action) => {
        return state.map(item => {
            if (item.id === action.payload.id) {
                return action.payload;
            } else {
                return item;
            }
        })}
    },
  });
  


  export const { addOfferElement, removeOfferElement, updateOfferElement } = OfferProductsSlice.actions;
  export default OfferProductsSlice.reducer;