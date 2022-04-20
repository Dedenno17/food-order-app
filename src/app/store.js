import { configureStore } from '@reduxjs/toolkit';

import mealsReducer from '../features/meals';
import modalCartReducer from '../features/modalCart';
import orderedMealsReducer from '../features/orderedMeals';

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    modalCart: modalCartReducer,
    orderedMeals: orderedMealsReducer,
  },
});
