import styles from './SearchBar.module.css';

export const SearchBar = () => {
	return (
		<div className={styles['search-bar-container']}>
			<input type="text" placeholder="Madrid, Berlin, Leipzig..." />
			<button>Search</button>
		</div>
	);
};
