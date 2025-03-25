import { configureStore } from '@reduxjs/toolkit';
import useReducer from './todosSlice.js';

export const store = configureStore({
  reducer: {
    task: useReducer,
  },
});