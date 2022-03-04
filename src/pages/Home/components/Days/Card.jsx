import React from "react";
import styled from "styled-components";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { GlobalStyles } from "../../../../theme/theme";
import { Day } from "./Days.jsx";
import s from "./Days.module.scss";

const Background = styled.div`
  background: ${(props) => props.theme.days};
  transition: "0.3s all";
`;

const Color = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const Card = ({ day }) => {
  return (
    <>

      <Background className={s.card}>
        <Color className={s.day}>{day.day}</Color>
        <Color className={s.day__info}>{day.day_info}</Color>
        <div className={s.img}>
          <GlobalSvgSelector id={day.icon_id} />
        </div>
        <Color className={s.temp__day}>{day.temp_day}</Color>
        <Color className={s.temp__night}>{day.temp_night}</Color>
        <Color className={s.info}>{day.info}</Color>
      </Background>
    </>
  );
};

export default Card;
