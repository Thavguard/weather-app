import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const Container = styled.div`
  display: flex;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 0px 0px 20px 20px;
  padding: 20px 9px;
`;

const WeatherOnFuture = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default WeatherOnFuture;
