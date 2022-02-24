import React from "react";
import logo from "../../assets/images/Header/logo.svg";
import styled from "styled-components";
import ThemeTogler from "../ThemeToggler/ThemeTogler";
import FormWeather from "../FormWeather/FormWeather";
import SelectCity from "../SelectCity/SelectCity";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 0 0;
`;

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 700;
  color: #4793ff;
`;

const TextStyle = styled.h2`
  margin-left: 20px;
`;

const CityStyle = styled.div`
  display: flex;
  align-items: center;
`;
const SelectCityStyle = styled.div`
  margin-left: 20px;
`;

const Header = (props) => {
  return (
    <HeaderStyle>
      <LogoStyle>
        <img src={logo} alt="" />
        <TextStyle>React weather</TextStyle>
      </LogoStyle>
      <CityStyle className="">
        <FormWeather />
        <ThemeTogler themeToggler={props.themeToggler} />
        <SelectCityStyle>
          <SelectCity />
        </SelectCityStyle>
      </CityStyle>
    </HeaderStyle>
  );
};

export default Header;
