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
      value: `${Math.round(data?.current.temp) || "0"}° - ощущается как ${Math.round(data?.current.feels_like) || "0"
        }°`,
    },
    {
      iconId: "pressure",
      name: "Давление",
      value: `${Math.round(data?.current.pressure) || 0} миллибар
      `,
    },
    {
      iconId: "precipitation",
      name: "Влажность",
      value: `${Math.round(data?.current.humidity) || 0}%`,
    },
    {
      iconId: "wind",
      name: "Ветер",
      value: `${Math.round(data?.current.wind_speed) || 0}м/с ${Math.round(data?.current.wind_deg) || 0
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
