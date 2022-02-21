import React from "react";
import styled from "styled-components";
import Sun from "../../assets/images/Weather/sun.svg";

const TodayStyle = styled.div`
  padding: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
`;

const Weather = styled.div`
  display: flex;
`;

const TemperatureGroup = styled.div``;

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
  margin-left: 47px;
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
  return (
    <TodayStyle>
      <Weather>
        <TemperatureGroup>
          <Temperature>20&#176;</Temperature>
          <TextToday>Сегодня</TextToday>
        </TemperatureGroup>

        <Sky>
          <img src={Sun} alt="" width={119} height={119} />
        </Sky>
      </Weather>
      <Info>
        <Time>Время: 21:54</Time>
        <City>Город: Санкт-Петербург</City>
      </Info>
    </TodayStyle>
  );
};

export default Today;
