import { configureStore } from "@reduxjs/toolkit";
import { weatherAPI } from "../API/weather.api";
import { weatherSliceReducer } from "./slices/weatherSlice";

export const store = configureStore({
    reducer: {
        [weatherAPI.reducerPath]: weatherAPI.reducer,
        weather: weatherSliceReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherAPI.middleware),

})

window.store = store.getState()