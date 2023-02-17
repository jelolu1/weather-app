import { NavLink } from 'react-router-dom';
import styles from './WeatherList.module.css';

const citiesArray = [
	{ id: 0, city: 'Madrid', country: 'Spain', flag: '🇪🇸' },
	{ id: 1, city: 'Berlin', country: 'Germany', flag: '🇩🇪' },
	{ id: 2, city: 'London', country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
	{ id: 3, city: 'Barcelona', country: 'Spain', flag: '🇪🇸' },
	{ id: 4, city: 'Leipzig', country: 'Germany', flag: '🇩🇪' },
];

export const WeatherList = () => {
	return (
		<ul className={styles['list']}>
			{citiesArray.map((c) => (
				<NavLink key={c.id} to={`${c.city}`}>
					<div className={styles['list-item']}>
						<h2>{c.city}</h2>
						<h2>{c.flag}</h2>
					</div>
				</NavLink>
			))}
		</ul>
	);
};
