import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = false;

export const modalCartSlice = createSlice({
    name: 'modalCart',
    initialState: {modalCart: initialStateValue},
    reducers: {
        setModalCart : (state, action) => {
            state.modalCart = action.payload;
        }
    }
})

export const {setModalCart} = modalCartSlice.actions;

export default modalCartSlice.reducer;