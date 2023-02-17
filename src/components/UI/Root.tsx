import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AnimatePage } from './AnimatePage';
import styles from './Root.module.css';

export const Root = () => {
	const location = useLocation();

	return (
		<div className={styles['container']}>
			<header>
				<nav className={styles['navigation']}>
					<ul>
						<li>
							<NavLink style={{ textDecoration: 'none' }} to="">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink style={{ textDecoration: 'none' }} to="about">
								About
							</NavLink>
						</li>
						<li>
							<NavLink style={{ textDecoration: 'none' }} to="contact">
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main className={styles['main-container']}>
				<AnimatePage pageName={location.pathname}>
					<Outlet />
				</AnimatePage>
			</main>
		</div>
	);
};
