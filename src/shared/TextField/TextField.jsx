import React from "react";
import s from "./TextField.module.scss";
import { useForm } from "react-hook-form";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import { useDispatch } from "react-redux";
import { weatherSliceActions } from "../../store/slices/weatherSlice";

export default function TextField() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(weatherSliceActions.setCity(data.city));
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.wrapper}>
          <input {...register("city")} className={s.input} />
          <div className={s.search} onClick={handleSubmit(onSubmit)}>
            <GlobalSvgSelector id="search" />
          </div>
        </div>
      </form>
    </div>
  );
}
