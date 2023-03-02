import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import allBatikReducer from "../features/allBatik/allBatikSlice";
import lakiLakiReducer from '../features/lakiLaki/lakiLakiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    allBatik: allBatikReducer,
    lakiLaki: lakiLakiReducer,
  },
});
