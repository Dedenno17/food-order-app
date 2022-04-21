import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const bumpSlice = createSlice({
    name: 'bump',
    initialState: {bump : initialStateValue},
    reducers : {
        setBump : (state, action) => {
            state.bump = action.payload;
        }
    }
})

export const {setBump} = bumpSlice.actions;

export default bumpSlice.reducer;