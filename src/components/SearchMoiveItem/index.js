/** @format */

import React from 'react';

export const SearchMoiveItem = ({ movie, handleSelectedMovie }) => {
	return (
		<li
			onClick={() => {
				handleSelectedMovie(movie);
			}}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
};
