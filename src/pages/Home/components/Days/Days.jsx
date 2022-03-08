import React from "react";
import Preloader from "react-preloaders/lib/Preloader";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { usePosition } from "use-position";
import {
  useGetCoordQuery,
  useGetOneCallQuery,
} from "../../../../API/weather.api";
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
  const { city } = useSelector((state) => state.weather);
  const { latitude, longitude } = usePosition();
  const coord = useGetCoordQuery(city);
  const forecast = useGetOneCallQuery(
    (coord.data && coord.data[0]) || { lat: latitude, lon: longitude }
  );

  return (
    <>
      <Tabs />
      <Background className={s.days}>
        {forecast.data &&
          forecast.data.daily
            .slice(0, -1)
            .map((day, index) => (
              <Card day={day} key={index} setModal={props.setModal} />
            ))}
      </Background>
    </>
  );
};

export default Days;
