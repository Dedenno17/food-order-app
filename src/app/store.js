import { configureStore } from '@reduxjs/toolkit';

import mealsReducer from '../features/meals';
import modalCartReducer from '../features/modalCart';

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    modalCart: modalCartReducer,
  },
});
