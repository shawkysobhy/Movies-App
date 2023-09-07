/** @format */

import { useEffect, useRef } from 'react';

export const Search = ({ query, setQuery }) => {
	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<input
			className='search'
			type='text'
			placeholder='Search movies...'
			value={query}
			ref={inputRef}
			onChange={(e) => setQuery(e.target.value)}
		/>
	);
};
