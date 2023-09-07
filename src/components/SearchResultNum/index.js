/** @format */

import React from 'react';

export const SearchResultNum = ({ moviesLengthList }) => {
	return (
		<p className='num-results'>
			Found <strong>{moviesLengthList}</strong> results
		</p>
	);
};
