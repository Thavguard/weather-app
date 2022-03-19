import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    city: "",
    currentPopup: null,
    isModal: false
}


export const weatherSlice = createSlice({
    name: "weatherSlice",
    initialState,
    reducers: {
        setCity(state, action) {
            state.city = action.payload
        },

        setCurrentPopup(state, action) {
            state.currentPopup = action.payload
        },
        setModal(state, action) {
            state.isModal = action.payload

        }

    }
})

export const weatherSliceReducer = weatherSlice.reducer
export const weatherSliceActions = weatherSlice.actions