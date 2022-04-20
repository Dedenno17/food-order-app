import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const orderedMealsSlice = createSlice({
    name: 'orderedMeals',
    initialState: {orderedMeals: initialStateValue},
    reducers: {
        addMeals: (state, action) => {
            state.orderedMeals.push(action.payload);
        }
    }
});

export const {addMeals} = orderedMealsSlice.actions;

export default orderedMealsSlice.reducer;