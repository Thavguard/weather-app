import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const KEY = "821104d3823a8dff19d682dbda03f3ac"

export const weatherAPI = createApi({
    reducerPath: "weatherAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.openweathermap.org/" }),
    endpoints: (build) => ({
        getCoord: build.query({
            query: (city, limit = 1) => `geo/1.0/direct?q=${city}&limit=${limit}&appid=${KEY}
            `
        }),

        getOneCall: build.query({
            query: ({ lat, lon }) => `data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${KEY}`
        })
    })
})

export const { useGetCoordQuery, useGetOneCallQuery } = weatherAPI