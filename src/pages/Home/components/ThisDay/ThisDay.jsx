import React from "react";
import styled from "styled-components";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { GlobalStyles } from "../../../../theme/theme";

import s from "./ThisDay.module.scss";

const Background = styled.div`
  background: ${(props) => props.theme.components};
  transition: "0.3s all";
`;

const Color = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const ThisDay = ({ data }) => {
  return (
    <>
      <Background className={s.ThisDay}>
        <div className={s.top__block}>
          <div className={s.top__block_wrapper}>
            <div className={s.this__temp}>
              {(data && Math.round(data.main.temp)) || 0}&#176;
            </div>
            <Color className={s.this__day_name}>Сегодня</Color>
          </div>
          <GlobalSvgSelector id="sun" />
        </div>
        <div className={s.bottom__block}>
          <div className={s.this__time}>
            Время: <span>{(data && data.main.temp) || "----"}</span>
          </div>
          <div className={s.this__city}>
            Город: <span>{(data && data.name) || "----"}</span>
          </div>
        </div>
      </Background>
    </>
  );
};

export default ThisDay;
