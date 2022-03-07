import React from "react";
import styled from "styled-components";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { timeConverter } from "../../../../services/timeConverter";
import { GlobalStyles } from "../../../../theme/theme";
import { Day } from "./Days.jsx";
import s from "./Days.module.scss";

const Background = styled.div`
  background: ${(props) => props.theme.days};
  transition: "0.3s all";
`;

const Color = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const Card = ({ day }) => {
  const time = timeConverter(day.dt);

  let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  let d = new Date();
  let n = d.getDay();
  console.log(days[n]);

  return (
    <>
      <Background className={s.card}>
        <Color className={s.day}>{time.slice(0, 6)}</Color>
        <Color className={s.day__info}>{time.slice(6, 11)}</Color>
        <div className={s.img}>
          <GlobalSvgSelector id={day.weather[0].main} />
        </div>
        <Color className={s.temp__day}>{day.temp.day}&#176;</Color>
        <Color className={s.temp__night}>{day.temp.night}&#176;</Color>
        <Color className={s.info}>{day.weather[0].main}</Color>
      </Background>
    </>
  );
};

export default Card;
