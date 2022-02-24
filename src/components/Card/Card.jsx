import React from "react";
import styled from "styled-components";
import Rain from "../../assets/images/Sky/Rain.svg";
import Cloudy from "../../assets/images/Sky/Cloudy.svg";
import SmaillRainSun from "../../assets/images/Sky/SmaillRainSun.svg";
import SmallRain from "../../assets/images/Sky/SmallRain.svg";
import Sun from "../../assets/images/Sky/Sun.svg";
import { useGetCurrentDate } from "../../hooks/useGetCurrentDate";

const Container = styled.div`
  padding: 11px;
  background: rgba(71, 147, 255, 0.2);
  width: 100%;
  max-width: 149px;
  border-radius: 10px;
  margin: 0 10px;
`;

const Day = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 7px;
`;

const Data = styled.div`
  font-size: 14px;
  color: #939cb0;
  margin-bottom: 20px;
`;

const Sky = styled.div`
  margin-bottom: 13px;
  transform: translateX(-4px);
`;

const Temp = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 5px;
`;
const TempFill = styled.div`
  font-size: 14px;
  color: #939cb0;
  margin-bottom: 6px;
`;

const Weather = styled.div`
  font-size: 13px;
  color: #939cb0;
`;

const Card = (props) => {
  let date = props.date;
  date = date.slice(8);

  const { dateToday, day, mouth, year, isToday, mouthNow, dateOfWeek } =
    useGetCurrentDate(props.date);
  console.log(dateToday, day, mouth, year, isToday, mouthNow, dateOfWeek);

  return (
    <Container>
      <Day>{isToday}</Day>
      <Data>{date + " " + mouthNow}</Data>
      <Sky>
        <img src={props.icon} alt="" />
      </Sky>
      <Temp>{props.temp}</Temp>
      <TempFill>{props.tempFill}</TempFill>
      <Weather>{props.weather}</Weather>
    </Container>
  );
};

export default Card;
