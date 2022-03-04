import React from "react";
import styled from "styled-components";
import cloud from "../../../../assets/images/cloud.png";
import s from "./ThisDayInfo.module.scss";
import ThisDayItem from "./ThisDayItem";

const Background = styled.div`
  background: ${(props) => props.theme.components};
  transition: "0.3s all";
`;

const Color = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const ThisDayInfo = ({ data }) => {
  const items = [
    {
      iconId: "temp",
      name: "Температура",
      value: `${(data && Math.round(data.main.temp)) || "0"}° - ощущается как ${
        (data && Math.round(data.main.feels_like)) || "0"
      }°`,
    },
    {
      iconId: "pressure",
      name: "Давление",
      value: `${(data && Math.round(data.main.pressure)) || 0} мб
      `,
    },
    {
      iconId: "precipitation",
      name: "Влажность",
      value: `${(data && Math.round(data.main.humidity)) || 0} %`,
    },
    {
      iconId: "wind",
      name: "Ветер",
      value: `${(data && Math.round(data.wind.speed)) || 0} м/с ${
        (data && Math.round(data.wind.deg)) || 0
      }°`,
    },
  ];
  return (
    <Background className={s.This__Day__Info}>
      <div className={s.this__day__info__items}>
        {items.map((item) => (
          <ThisDayItem item={item} key={item.iconId} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="Облако" />
    </Background>
  );
};

export default ThisDayInfo;
