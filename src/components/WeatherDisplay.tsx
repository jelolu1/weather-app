import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import result from '../json/result.json';
import styles from './WeatherDisplay.module.css';

type weatherPerDayType = {
	id: number;
	weekDay: string;
	date: string;
	img: string;
	altImg: string;
	minT: number;
	maxT: number;
};

const settings = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
};

export const WeatherDisplay = () => {
	const [weatherPerDay, setWeatherPerDay] = useState<weatherPerDayType[]>([]);
	const location = useLocation();

	useEffect(() => {
		const weekDayFormat = Intl.DateTimeFormat('en-GB', {
			weekday: 'long',
		});

		const dateFormat = Intl.DateTimeFormat('en-GB', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		});

		setWeatherPerDay(
			result.hourly.time
				.filter((hour) => hour.includes('01:00'))
				.map((day, i) => {
					return {
						id: i,
						weekDay: weekDayFormat.format(new Date(day)),
						date: dateFormat.format(new Date(day)),
						img: 'sunny.png',
						altImg: 'Sunny',
						minT: 20,
						maxT: 26,
					};
				})
		);
	}, []);

	return weatherPerDay.length > 0 ? (
		<>
			<h2>Weather in {location.pathname.replace('/', '')}</h2>
			<div className={styles['days-container']}>
				<Slider {...settings}>
					{weatherPerDay.map((day) => {
						console.log(day);
						return (
							<div className={styles['week-day']} key={day.weekDay}>
								<p>{day.weekDay}</p>
								<p>{day.date}</p>
								<img src={day.img} alt={day.altImg} />
								<p>{`${day.minT}º ~ ${day.maxT}º`}</p>
							</div>
						);
					})}
				</Slider>
			</div>
		</>
	) : (
		<></>
	);
};
