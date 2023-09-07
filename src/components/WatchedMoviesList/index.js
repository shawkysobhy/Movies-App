/** @format */

import { WatchedMovieItem } from '../index';
export const WatchedMoviesList = ({ watched, handleDeletedMovie }) => {
	return (
		<ul className='list'>
			{watched.map((movie) => {
				return (
					<WatchedMovieItem
						movie={movie}
						key={movie.imdbID}
						handleDeletedMovie={handleDeletedMovie}
					/>
				);
			})}
		</ul>
	);
};
