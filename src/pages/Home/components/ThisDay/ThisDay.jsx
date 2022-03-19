import React from "react";
import styled from "styled-components";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { timeConverter } from "../../../../services/timeConverter";
import { GlobalStyles } from "../../../../theme/theme";

import s from "./ThisDay.module.scss";

const Background = styled.div`
  background: ${(props) => props.theme.components};
  transition: "0.3s all";
`;

const Color = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const ThisDay = (props) => {
  let Data = new Date();
  let Hour = Data.getHours();
  let Minutes = Data.getMinutes();

  return (
    <>
      <Background className={s.ThisDay}>
        <div className={s.top__block}>
          <div className={s.top__block_wrapper}>
            <div className={s.this__temp}>
              {Math.round(props.weather?.current.temp) || 0}
              &#176;
            </div>
            <Color className={s.this__day_name}>Сегодня</Color>
          </div>
          <GlobalSvgSelector id={props.weather?.current.weather[0].main} />
        </div>
        <div className={s.bottom__block}>
          <div className={s.this__time}>
            Время: <span>{props.weather && `${Hour}:${Minutes}`}</span>
          </div>
          <div className={s.this__city}>
            Город:{" "}
            <span>{props.coord?.local_names?.ru || props.weather?.timezone}</span>
          </div>
        </div>
      </Background>
    </>
  );
};

export default ThisDay;
