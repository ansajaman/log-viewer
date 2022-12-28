import { configureStore } from '@reduxjs/toolkit';
import jsonArraySlice from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    jsonArray: jsonArraySlice,
  },
});
