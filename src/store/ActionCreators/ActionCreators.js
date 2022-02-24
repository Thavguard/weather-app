import { weatherSlice } from "../weather/weather.slice"


export const weatherAC = (city) => (dispatch) => {
    dispatch(weatherSlice.actions.setCity(city))
}