import {  createSlice } from '@reduxjs/toolkit';

const newAdquisitionProducts = createSlice({
    name: 'OfferProducts',
    initialState:  [
         "coca con café x250ml",
        "galletitas koki x500g",
       "alcohol frau x500ml",
    ],
    reducers: {
      addAdquisitionElement: (state, action) => {
        state.push(action.payload);
      },
      removeAdquisitionElement: (state, action) => {
        return state.filter(item => item.id !== action.payload.id);
      },
      updateAdquisitionElement: (state, action) => {
        return state.map(item => {
            if (item.id === action.payload.id) {
                return action.payload;
            } else {
                return item;
            }
        })}
    },
  });
  


  export const { addOfferElement, removeOfferElement, updateOfferElement } = newAdquisitionProducts.actions;
  export default newAdquisitionProducts.reducer;