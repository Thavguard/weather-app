import { configureStore } from '@reduxjs/toolkit'
import { weatherReducer } from './weather/weather.slice'
import { weatherApi } from './weatherApi/weather.api'

export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
        weather: weatherReducer,


    },
})

window.store = store