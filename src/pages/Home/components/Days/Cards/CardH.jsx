import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import GlobalSvgSelector from "../../../../../assets/icons/global/GlobalSvgSelector";
import { timeConverter } from "../../../../../services/timeConverter";
import { weatherSliceActions } from "../../../../../store/slices/weatherSlice";
import { GlobalStyles } from "../../../../../theme/theme";
import { Day } from "../Days.jsx";
import s from "./Card.module.scss";

const Background = styled.div`
  background: ${(props) => props.theme.days};
  transition: "0.3s all";
`;

const Color = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const CardH = (props) => {
	const dispatch = useDispatch()

	const time = timeConverter(props.day.dt);

	// const onClickDay = () => {
	// 	dispatch(weatherSliceActions.setCurrentPopup(props.index));
	// 	dispatch(weatherSliceActions.setModal(true));


	// }

	return (
		<>
			<Background className={s.cardH} >
				<Color className={s.cardH__day}>{time.slice(11, -2)}</Color>
				{/* <Color className={s.cardH__day__info}>{time.slice(6, 11)}</Color> */}
				<div className={s.cardH__img}>
					<GlobalSvgSelector id={props.day.weather[0].main} />
				</div>
				<Color className={s.cardH__temp__day}>{props.day.temp}&#176;</Color>
				<Color className={s.cardH__temp__night}>{props.day.feels_like}&#176;</Color>
				<Color className={s.cardH__info}>{props.day.weather[0].main}</Color>
			</Background>
		</>
	);
};

export default CardH;
