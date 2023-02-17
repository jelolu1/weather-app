import { ReactNode } from 'react';
import styles from './Card.module.css';

type CardPropsType = {
	children: ReactNode;
};

export const Card = ({ children }: CardPropsType) => {
	return <div className={styles['card-container']}>{children}</div>;
};
