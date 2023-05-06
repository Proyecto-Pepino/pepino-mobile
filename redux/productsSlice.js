import {  createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
    name: 'Products',
    initialState: {fruits: [
        {id:1, name:'manzana',price:`$ ${450}`},
        {id:2, name:'naranja',price:`$ ${250}`},
        {id:3, name:'pera' ,price:`$ ${500}`},
        {id:4, name:'tomate' ,price:`$ ${550}`},
        {id:5, name:'zanahoria',price:`$ ${670}`},
        {id:6, name:'ananá' ,price:`$ ${500}`},
        {id:7, name:'lechuga' ,price:`$ ${550}`},
        {id:8, name:'pepino',price:`$ ${670}`},
    ]
  },

    
    reducers: {
      addProductElement: (state, action) => {
        state.push(action.payload);
      },
      removeProductElement: (state, action) => {
        return state.filter(item => item.id !== action.payload.id);
      },
      updateProductElement: (state, action) => {
        return state.map(item => {
            if (item.id === action.payload.id) {
                return action.payload;
            } else {
                return item;
            }
        })}
    },
  });

  export const { addProductElement, removeProductElement, updateProductElement } = ProductSlice.actions;
  export default ProductSlice.reducer;