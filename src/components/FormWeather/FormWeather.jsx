import { Formik } from "formik";
import React from "react";
import styled from "styled-components";
import Search from "../../assets/images/Icons/search.svg";
import { weatherAC } from "../../store/ActionCreators/ActionCreators";
import { useDispatch } from "react-redux";

const Container = styled.div`
  margin-right: 50px;
`;

const Form = styled.form`
  display: flex;
`;

const InputContainer = styled.div`
  display: flex;
  background-color: #4793ff33;
  border-radius: 20px;
  padding: 10px 20px;
  transition: all 0.3s;

  width: 400px;

  &:hover {
    box-shadow: 2px 5px 25px -3px #dae9ff;
    transition: all 0.3s;
  }
`;

const Input = styled.input`
  background: none;
  border: none;
  width: 90%;

  &:focus {
    outline: none;
  }

  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: inherit;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

const Img = styled.img`
  cursor: pointer;
  transform: translateY(-1px);
`;

const FormWeather = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(weatherAC(values.city));
  };

  return (
    <Container>
      <Formik initialValues={{ city: "" }} onSubmit={onSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Input
                type="text"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              <Icon>
                <Img
                  src={Search}
                  alt=""
                  width={25}
                  height={25}
                  onClick={handleSubmit}
                />
              </Icon>
            </InputContainer>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormWeather;
