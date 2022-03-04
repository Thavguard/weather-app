import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../../../../theme/theme";
import Card from "./Card";
import s from "./Days.module.scss";
import Tabs from "./Tabs";

const Background = styled.div`
  background: ${(props) => props.theme.components};
  transition: "0.3s all";
`;

const Color = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const Days = (props) => {
  const days = [
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Завтра",
      day_info: "29 авг",
      icon_id: "rain-and-sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь и солнце",
    },
    {
      day: "Ср",
      day_info: "30 авг",
      icon_id: "small-rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь",
    },
    {
      day: "Чт",
      day_info: "28 авг",
      icon_id: "cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Пт",
      day_info: "28 авг",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сб",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Вс",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
  ];
  return (
    <>
      <Tabs />
      <Background className={s.days}>
        {days.map((day) => (
          <Card day={day} key={day.day} />
        ))}
      </Background>
    </>
  );
};

export default Days;
