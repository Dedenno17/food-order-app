import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from '../features/meals';

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
});
