import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { usePosition } from "use-position";
import { useGetCoordQuery, useGetOneCallQuery } from "../../API/weather.api";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import { timeConverter } from "../../services/timeConverter";
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

const Popup = ({ visible = false, onClose }) => {
  // создаем обработчик нажатия клавиши Esc
  const onKeydown = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  const { city } = useSelector((state) => state.weather);
  const { latitude, longitude } = usePosition();
  const coord = useGetCoordQuery(city);
  const forecast = useGetOneCallQuery(
    (coord.data && coord.data[0]) || { lat: latitude, lon: longitude }
  );

  const data = forecast?.data?.daily[0];
  const time = timeConverter(data?.dt);

  // если компонент невидим, то не отображаем его
  if (!visible) return null;

  // или возвращаем верстку модального окна
  return (
    <>
      <div className={s.blur}></div>
      <Background className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>{data.temp.day}&#176;</div>
          <Color className={s.day__name}>{time.slice(0, 6)}</Color>
          <div className={s.img}>
            <GlobalSvgSelector id={data.weather[0].main} />
          </div>
          <div className={s.day__time}>
            Время: <span>21:57</span>
          </div>
          <div className={s.day__city}>
            Город: <span>{coord.data && coord.data[0].local_names.ru}</span>
          </div>
        </div>
        <div className={s.This__Day__Info}>
          <div className={s.this__day__info__items}>
            {items.map((item) => (
              <ThisDayItem item={item} key={item.iconId} />
            ))}
          </div>
        </div>
        <div className={s.close} onClick={onClose}>
          <GlobalSvgSelector id="close" />
        </div>
      </Background>
    </>
  );
};

export default Popup;
