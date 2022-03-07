import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePosition } from "use-position";
import { useGetCoordQuery, useGetWeatherQuery } from "../../API/weather.api.js";
import Preloader from "../../shared/Preloader/Preloader.jsx";
import Days from "./components/Days/Days.jsx";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";

import s from "./Home.module.scss";

const Home = (props) => {
  const { city } = useSelector((state) => state.weather);
  const { latitude, longitude } = usePosition();

  const coord = useGetCoordQuery(city);
  const weather = useGetWeatherQuery(
    (coord.data && coord.data[0]) || { lat: latitude, lon: longitude }
  );

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather.data} coord={coord.data && coord.data[0]} />
        <ThisDayInfo data={weather.data} />
      </div>
      <Days />
    </div>
  );
};

export default Home;
