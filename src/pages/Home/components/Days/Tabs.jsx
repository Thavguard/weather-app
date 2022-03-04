import React from "react";
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
`;

const Tabs = (props) => {
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <Background className={s.tab} key={tab.value}>
            {tab.value}
          </Background>
        ))}
      </div>
      <Background className={s.cancel}>Отменить</Background>
    </div>
  );
};

export default Tabs;
