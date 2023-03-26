import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './createSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;