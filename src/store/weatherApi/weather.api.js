import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { key } from './key'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1/' }),
    endpoints: (builder) => ({
        getWeather: builder.query({
            query: (name, days = 3) => `forecast.json?key=${key}&q=${name}&days=${days}&aqi=no&alerts=no
            `,
        }),

    }),
})

export const { useGetWeatherQuery } = weatherApi
