import React, { useEffect, useState } from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import Select from "react-select";

import s from "./Header.module.scss";
import TextField from "../TextField/TextField";

const Header = ({ switchTheme }) => {
  const options = [
    { value: "city-1", label: "Москва" },
    { value: "city-2", label: "Абакан" },
    { value: "city-3", label: "Новгород" },
  ];

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 1 ? "#4f4f4f" : "#DAE9FF",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),

    option: (styles, state) => ({
      ...styles,
      color: 1 ? "#fff" : "#000",
      backgroundColor: 1
        ? state.isFocused
          ? "#3f3f3f"
          : ""
        : state.isFocused
          ? "#cfddf2"
          : "",
    }),

    menu: (styles, state) => ({
      ...styles,
      backgroundColor: 1 ? "#4f4f4f" : "#DAE9FF",
    }),

    singleValue: (styles) => ({
      ...styles,
      color: 1 ? "#fff" : "#000",
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.text__field}>
          <TextField />
        </div>
        <div className={s.change_theme} onClick={switchTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          options={options}
          styles={colorStyles}
          defaultValue={options[0]}
          className={s.select}
        />
      </div>
    </header>
  );
};

export default Header;
