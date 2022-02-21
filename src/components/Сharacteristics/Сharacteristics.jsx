import React from "react";
import styled from "styled-components";
import Temp from "../../assets/images/Weather/Temp.svg";
import Pressure from "../../assets/images/Weather/Pressure.svg";
import Wind from "../../assets/images/Weather/Wind.svg";
import Rain from "../../assets/images/Weather/Rain.svg";
import CloudImg from "../../assets/images/Weather/Cloud.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;

  width: 100%;
  margin-left: 50px;

  background-image: url(${CloudImg});
  background-repeat: no-repeat;
  background-position: top right;
`;

const Padding = styled.div`
  padding: 32px 32px;
`;

const Item = styled.div`
  display: flex;
  margin: 20px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
  padding: 10px;
  border-radius: 50%;
`;

const Text = styled.div`
  font-size: 14px;
  color: #939cb0;
  margin: 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 96px;
  text-align: left;
`;

const Result = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Сharacteristics = () => {
  return (
    <Container>
      <Padding>
        <Item>
          <Icon>
            <img src={Temp} alt="" />
          </Icon>
          <Text>Температура</Text>
          <Result>20&#176; - ощущается как 17&#176;</Result>
        </Item>
        <Item>
          <Icon>
            <img src={Pressure} alt="" />
          </Icon>
          <Text>Давление</Text>
          <Result>765 мм ртутного столба - нормальное</Result>
        </Item>
        <Item>
          <Icon>
            <img src={Wind} alt="" />
          </Icon>
          <Text>Осадки</Text>
          <Result>Без осадков</Result>
        </Item>
        <Item>
          <Icon>
            <img src={Rain} alt="" />
          </Icon>
          <Text>Ветер</Text>
          <Result>3 м/с юго-запад - легкий ветер</Result>
        </Item>
      </Padding>
    </Container>
  );
};

export default Сharacteristics;
