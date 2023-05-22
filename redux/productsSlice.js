import {  createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
    name: 'Products',
    initialState: {fruits: [
        {id:1, name:'Manzana Roja',price:450},
        {id:2, name:'Naranja',price:250},
        {id:3, name:'Pera' ,price:500},
        {id:4, name:'Tomate' ,price:550},
        {id:5, name:'Zanahoria',price:670},
        {id:6, name:'Ananá' ,price:500},
        {id:7, name:'Lechuga' ,price:550},
        {id:8, name:'Pepino',price:670},
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