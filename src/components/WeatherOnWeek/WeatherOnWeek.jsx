import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetWeatherQuery } from "../../store/weatherApi/weather.api";
import Card from "../Card/Card";

const Container = styled.div`
  display: flex;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 0px 0px 20px 20px;
  padding: 20px 9px;
`;

const WeatherOnWeek = () => {
  const { city } = useSelector((state) => state.weather);
  const { data, isLoading, error } = useGetWeatherQuery(city);
  return (
    <Container>
      {data &&
        data.forecast.forecastday.map((e) => (
          <Card
            day={e.date}
            date={e.date}
            icon={e.day.condition.icon}
            temp={e.day.maxtemp_c}
            tempFill={e.day.mintemp_c}
            weather={e.day.condition.text}
          />
        ))}
    </Container>
  );
};

export default WeatherOnWeek;
