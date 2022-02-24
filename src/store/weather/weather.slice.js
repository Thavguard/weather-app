import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    city: ""
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setCity: (state = initialState, action) => {
            state.city = action.payload
        }
    }
})



export const weatherReducer = weatherSlice.reducer
export const weatherActions = weatherSlice.actions
