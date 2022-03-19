import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { timeConverter } from "../../../../services/timeConverter";
import { weatherSliceActions } from "../../../../store/slices/weatherSlice";
import { GlobalStyles } from "../../../../theme/theme";
import { Day } from "./Days.jsx";
import s from "./Days.module.scss";

const Background = styled.div`
  background: ${(props) => props.theme.days};
  transition: "0.3s all";
`;

const Color = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const Card = (props) => {
	const dispatch = useDispatch()

	const time = timeConverter(props.day.dt);
	const onClickDay = () => {
		dispatch(weatherSliceActions.setCurrentPopup(props.index));
		dispatch(weatherSliceActions.setModal(true));


	}

	return (
		<>
			<Background className={s.card} onClick={onClickDay}>
				<Color className={s.day}>{time.slice(0, 6)}</Color>
				<Color className={s.day__info}>{time.slice(6, 11)}</Color>
				<div className={s.img}>
					<GlobalSvgSelector id={props.day.weather[0].main} />
				</div>
				<Color className={s.temp__day}>{props.day.temp.day}&#176;</Color>
				<Color className={s.temp__night}>{props.day.temp.night}&#176;</Color>
				<Color className={s.info}>{props.day.weather[0].main}</Color>
			</Background>
		</>
	);
};

export default Card;
