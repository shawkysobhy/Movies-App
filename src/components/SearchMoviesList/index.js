/** @format */

import { SearchMoiveItem } from '../SearchMoiveItem';

export const SearchMoviesList = ({ movies, handleSelectedMovie }) => {
	return (
		<ul className='list list-movies'>
			{movies?.map((movie) => {
				return (
					<SearchMoiveItem
						key={movie.imdbID}
						movie={movie}
						handleSelectedMovie={handleSelectedMovie}
					/>
				);
			})}
		</ul>
	);
};
