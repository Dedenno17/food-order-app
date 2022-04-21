import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const orderedMealsSlice = createSlice({
    name: 'orderedMeals',
    initialState: {orderedMeals: initialStateValue},
    reducers: {
        addOrder: (state, action) => {

            if(state.orderedMeals.length === 0) {
                state.orderedMeals.push(action.payload);
            }else{
                for(let i = 0; i < state.orderedMeals.length; i++) {
                    if( state.orderedMeals[i].id === action.payload.id ) {
                        const updatedTotalPrice = (state.orderedMeals[i].totalPrice / state.orderedMeals[i].amount) * (state.orderedMeals[i].amount + action.payload.amount);
                        const updatedAmount = state.orderedMeals[i].amount + action.payload.amount;

                        const updatedMeal = {
                            id: action.payload.id,
                            name: action.payload.name,
                            totalPrice: updatedTotalPrice,
                            amount: updatedAmount
                        }

                        state.orderedMeals[i] = updatedMeal;
                        return;
                    }
                }
                
                state.orderedMeals.push(action.payload);
            }

        },

        removeOrder : (state, action) => {
            
            for(let i = 0; i < state.orderedMeals.length; i++) {
                if( state.orderedMeals[i].id === action.payload ) {

                    const updatedTotalPrice = (state.orderedMeals[i].totalPrice / state.orderedMeals[i].amount) * (state.orderedMeals[i].amount - 1);
                    const updatedAmount = state.orderedMeals[i].amount - 1;

                    state.orderedMeals[i].totalPrice = updatedTotalPrice;
                    state.orderedMeals[i].amount = updatedAmount;
                }
            }

        },

        setOrder : (state) => {
            state.orderedMeals = [];
        }

    }
});

export const {addOrder, removeOrder, setOrder} = orderedMealsSlice.actions;

export default orderedMealsSlice.reducer;