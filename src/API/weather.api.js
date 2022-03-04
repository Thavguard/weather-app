import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const KEY = "821104d3823a8dff19d682dbda03f3ac"

export const weatherAPI = createApi({
    reducerPath: "weatherAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.openweathermap.org/" }),
    endpoints: (build) => ({
        getWeather: build.query({
            query: (city) => `data/2.5/weather?q=${city}&units=metric&appid=${KEY} `
        })
    })
})

export const { useGetWeatherQuery } = weatherAPI