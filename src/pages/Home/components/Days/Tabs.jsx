import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import s from "./Days.module.scss";

const tabs = [
  { value: "На неделю" },
  { value: "На месяц" },
  { value: "На 10 дней" },
];

const Background = styled.div`
  background: ${(props) => props.theme.components};
  transition: "0.3s all";
  color: ${(props) => props.theme.textColor};
`;

const Tabs = (props) => {
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        <Link className={s.link} to={"/"}>
          <Background className={s.tab}>На неделю</Background>
        </Link>
        <Link className={s.link} to={"48hours"}>
          <Background className={s.tab}>На 48 часов</Background>
        </Link>
        <Link className={s.link} to={"3hours"}>
          <Background className={s.tab}>На 3 часа</Background>
        </Link>
      </div>
      <Link className={s.link} to={"/"}>
        <Background className={s.cancel}>Отменить</Background>
      </Link>
    </div>
  );
};

export default Tabs;
