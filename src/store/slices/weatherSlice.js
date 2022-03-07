import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    city: "",
}


export const weatherSlice = createSlice({
    name: "weatherSlice",
    initialState,
    reducers: {
        setCity(state, action) {
            state.city = action.payload
        },

    }
})

export const weatherSliceReducer = weatherSlice.reducer
export const weatherSliceActions = weatherSlice.actions