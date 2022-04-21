import { configureStore } from '@reduxjs/toolkit';

import mealsReducer from '../features/meals';
import modalCartReducer from '../features/modalCart';
import orderedMealsReducer from '../features/orderedMeals';
import bumpReducer from '../features/bump';

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    modalCart: modalCartReducer,
    orderedMeals: orderedMealsReducer,
    bump: bumpReducer,
  },
});
