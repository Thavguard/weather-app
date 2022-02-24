import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { weatherAC } from "../../store/ActionCreators/ActionCreators";

const Container = styled.div``;
const Select = styled.select`
  background: none;
  border: none;
  font-family: inherit;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
const Option = styled.option`
  &:focus {
    outline: none;
  }
`;
const SelectContainer = styled.div`
  background: #dae9ff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
`;

const SelectCity = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <SelectContainer>
        <Select
          name="selectCity"
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(weatherAC(e.target.value));
          }}
        >
          <Option>Выбрать город</Option>
          <Option value="Абакан">Абакан</Option>
          <Option value="Абаза">Абаза</Option>
          <Option value="Красноярск">Красноярск</Option>
          <Option value="Москва">Москва</Option>
        </Select>
      </SelectContainer>
    </Container>
  );
};

export default SelectCity;
