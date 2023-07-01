/** @format */

import { SearchMoiveItem } from '../SearchMoiveItem';

export const SearchMoviesList = ({ movies }) => {
	return (
		<ul className='list'>
			{movies?.map((movie) => {
				return <SearchMoiveItem key={movie.imdbID} movie={movie} />;
			})}
		</ul>
	);
};
