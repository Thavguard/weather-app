import React from "react";
import Preloader from "react-preloaders/lib/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { usePosition } from "use-position";
import {
  useGetCoordQuery,
  useGetOneCallQuery,
} from "../../../../API/weather.api";
import { weatherSliceActions } from "../../../../store/slices/weatherSlice";
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
      <Routes>
        <Route path="*" element={
          <Background className={s.days}>
            {forecast.data &&
              forecast.data.daily
                .slice(0, -1)
                .map((day, index) => (
                  <Card day={day} key={index} setModal={props.setModal} index={index} />
                ))}
          </Background>
        } />
        <Route path="48hours" element={
          <Background className={s.days}>
            {forecast.data &&
              forecast.data.hourly
                .slice(0, -1)
                .map((day, index) => (
                  <Card day={day} key={index} setModal={props.setModal} index={index} />
                ))}48
          </Background>
        } />
        <Route path="3hours" element={
          <Background className={s.days}>
            {forecast.data &&
              forecast.data.daily
                .slice(0, -1)
                .map((day, index) => (
                  <Card day={day} key={index} setModal={props.setModal} index={index} />
                ))}3
          </Background>
        } />
      </Routes>

    </>
  );
};

export default Days;
