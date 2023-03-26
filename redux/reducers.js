import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  count: counterReducer,
});

export default rootReducer;