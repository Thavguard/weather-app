import React from "react";
import themeToggler from "../assets/images/themeToggler.svg";

const ThemeTogler = (props) => {
  return (
    <div>
      <img src={themeToggler} alt="" onClick={props.themeToggler} />
    </div>
  );
};

export default ThemeTogler;
