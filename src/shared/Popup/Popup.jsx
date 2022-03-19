import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { usePosition } from "use-position";
import { useGetCoordQuery, useGetOneCallQuery } from "../../API/weather.api";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import { timeConverter } from "../../services/timeConverter";
import { weatherSliceActions } from "../../store/slices/weatherSlice";
import s from "./Popup.module.scss";

const Background = styled.div`
  background: ${(props) => props.theme.components};
  transition: "0.3s all";
`;

const Color = styled.div`
  color: ${(props) => props.theme.textColor};
`;



const Popup = ({ visible = false }) => {
  const onClose = () => {
    dispatch(weatherSliceActions.setModal(false));
  }
  
  const dispatch = useDispatch()
  const { currentPopup } = useSelector(state => state.weather)

  const onKeydown = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose()
        break;
    }
  };

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

  const data = forecast?.data?.daily[currentPopup] // вместо [0] должен быть индекс элемента массива, по которому кликнули
  const time = timeConverter(data?.dt);

  if (!visible) return null;


  const items = [
    {
      iconId: "temp",
      name: "Температура",
      value: `${Math.round(data?.temp.day) || "0"}° - ощущается как ${Math.round(data?.feels_like.day) || "0"
        }°`,
    },
    {
      iconId: "pressure",
      name: "Давление",
      value: `${Math.round(data?.pressure) || 0} миллибар
      `,
    },
    {
      iconId: "precipitation",
      name: "Влажность",
      value: `${Math.round(data?.humidity) || 0}%`,
    },
    {
      iconId: "wind",
      name: "Ветер",
      value: `${Math.round(data?.wind_speed) || 0}м/с ${Math.round(data?.wind_deg) || 0
        }°`,
    },
  ];

  return (
    <>
      <div className={s.blur}></div>
      <Background className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>{data?.temp?.day || null}&#176;</div>
          <Color className={s.day__name}>{time.slice(0, 6)}</Color>
          <div className={s.img}>
            <GlobalSvgSelector id={(data?.weather[0]?.main) || null} />
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
