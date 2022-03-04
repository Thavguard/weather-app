import React from "react";
import styled from "styled-components";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import s from "./Popup.module.scss";

const Background = styled.div`
  background: ${(props) => props.theme.components};
  transition: "0.3s all";
`;

const Color = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const items = [
  {
    iconId: "temp",
    name: "Температура",
    value: "20 - ощущается как 17",
  },
  {
    iconId: "pressure",
    name: "Давление",
    value: "765 мм ртутного столба - нормальное",
  },
  {
    iconId: "precipitation",
    name: "Осадки",
    value: "Без осадков",
  },
  {
    iconId: "wind",
    name: "Ветер",
    value: "3 м/с юго-запад - легкий ветер",
  },
];

const Popup = () => {
  return (
    <>
      <div className={s.blur}></div>
      <Background className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20&#176;</div>
          <Color className={s.day__name}>Среда</Color>
          <div className={s.img}>
            <GlobalSvgSelector id={"sun"} />
          </div>
          <div className={s.day__time}>
            Время: <span>21:57</span>
          </div>
          <div className={s.day__city}>
            Город: <span>Санкт-Питербург</span>
          </div>
        </div>
        <div className={s.This__Day__Info}>
          <div className={s.this__day__info__items}>
            {items.map((item) => (
              <ThisDayItem item={item} key={item.iconId} />
            ))}
          </div>
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </Background>
    </>
  );
};

export default Popup;
