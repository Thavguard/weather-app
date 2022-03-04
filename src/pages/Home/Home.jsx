import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetWeatherQuery } from "../../API/weather.api.js";
import Days from "./components/Days/Days.jsx";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";

import s from "./Home.module.scss";

const Home = (props) => {
  const city = useSelector((state) => state.weather.city);
  const { data, error, isLoading } = useGetWeatherQuery(city);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay data={data} />
        <ThisDayInfo data={data}/>
      </div>
      <Days />
    </div>
  );
};

export default Home;
