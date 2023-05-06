import { combineReducers,configureStore } from '@reduxjs/toolkit';
import counterSlice from '../createSlice';
import counterSlice2 from '../createSlice2';
import todoSlice from '../taks1';
import listOfProductsSlice from '../familyProductListSlice';
import OfferproductsSlice from '../ofertSlice';
import newAdquisitionProducts from '../newadquisitionsSlice';
import productsSlice from '../productsSlice';

const rootReducer = combineReducers({
  count: counterSlice,
  count2: counterSlice2,
  count3:todoSlice,
  familyProducts: listOfProductsSlice,
  offerProducts:OfferproductsSlice,
  newadquisitions:newAdquisitionProducts,
  product:productsSlice

});

const store = configureStore({
  reducer: rootReducer
});

export default store;