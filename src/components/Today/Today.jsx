import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetWeatherQuery } from "../../store/weatherApi/weather.api";
import Cloudy from "../../assets/images/Sky/Cloudy.svg";
import SmaillRainSun from "../../assets/images/Sky/SmaillRainSun.svg";
import Rain from "../../assets/images/Sky/Rain.svg";
import Sun from "../../assets/images/Sky/Sun.svg";
import SmallRain from "../../assets/images/Sky/SmallRain.svg";

const TodayStyle = styled.div`
  padding: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
`;

const Weather = styled.div`
  display: flex;
`;

const TemperatureGroup = styled.div`
  width: 300px;
`;

const Temperature = styled.div`
  font-size: 96px;
  color: #4793ff;
`;
const TextToday = styled.h2`
  font-size: 40px;
  margin-top: 10px;
`;
const Sky = styled.div`
  display: flex;
  justifyh-content: center;
  align-items: center;
`;

const Info = styled.div`
  font-size: 25px;
  color: #939cb0;
  margin-top: 30px;
`;

const Time = styled.div``;
const City = styled.div`
  margin-top: 14px;
`;

const Today = () => {
  const { city } = useSelector((state) => state.weather);
  const { data, isLoading, error } = useGetWeatherQuery(city);

  let Datatime = "";

  if (data) {
    Datatime = data.location.localtime;
  }

  const time = Datatime.slice(10);

  return (
    <TodayStyle>
      <Weather>
        <TemperatureGroup>
          <Temperature>
            {(data && data.current.temp_c) || <span>0</span>}&#176;
          </Temperature>
          <TextToday>Сегодня</TextToday>
        </TemperatureGroup>

        <Sky>
          <img src={(data && data.current.condition.icon) || Sun} alt="" />
        </Sky>
      </Weather>
      <Info>
        <Time>Время: {time}</Time>
        <City>Город: {data && data.location.name}</City>
      </Info>
    </TodayStyle>
  );
};

export default Today;
