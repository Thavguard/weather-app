import React from "react";
import styled from "styled-components";
import { IndicatorSvgSelector } from "../../../../assets/icons/Indicators/IndicatorSvgSelector";
import { Item } from "./ThisDayInfo";
import s from "./ThisDayInfo.module.scss";

const Color = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const ThisDayItem = ({ item }) => {
  const { iconId, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={iconId} />
      </div>
      <Color className={s.indicator__name}>{name}</Color>
      <Color className={s.indicator__value}>{value}</Color>
    </div>
  );
};

export default ThisDayItem;
