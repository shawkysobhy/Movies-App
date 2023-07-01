/** @format */

import React from 'react';

export const SearchResultNum = ({ movies }) => {
	return (
		<p className='num-results'>
			Found <strong>{movies.length}</strong> results
		</p>
	);
};
