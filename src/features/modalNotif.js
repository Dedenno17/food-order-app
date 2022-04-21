import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {status: false, message: ''};

export const modalNotifSlice = createSlice({
    name: 'modalNotif',
    initialState: {modalNotif: initialStateValue},
    reducers : {
        setModalNotif: (state, action) => {
            state.modalNotif = action.payload;
        }
    }
})

export const {setModalNotif} = modalNotifSlice.actions;

export default modalNotifSlice.reducer;