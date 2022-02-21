import React from "react";
import styled from "styled-components";
import Rain from "../../assets/images/Sky/Rain.svg";
import Cloudy from "../../assets/images/Sky/Cloudy.svg";
import SmaillRainSun from "../../assets/images/Sky/SmaillRainSun.svg";
import SmallRain from "../../assets/images/Sky/SmallRain.svg";
import Sun from "../../assets/images/Sky/Sun.svg";

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

const Card = () => {
  return (
    <Container>
      <Day>Сегодня</Day>
      <Data>28 авг</Data>
      <Sky>
        <img src={Rain} alt="" />
      </Sky>
      <Temp>+18</Temp>
      <TempFill>+15</TempFill>
      <Weather>Облачно</Weather>
    </Container>
  );
};

export default Card;
