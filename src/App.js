import { useState } from 'react';
import { useMoives } from './hooks/useMovies';
import { useLocalStorageState } from './hooks/useLocalStorge';
import {
	WatchedMoviesList,
	SearchMoviesList,
	NavBar,
	ListBox,
	Search,
	SearchResultNum,
	MovieDetails,
	ErrorMessage,
	Loader,
	MoviesSummery,
} from './components';
export default function App() {
	const [query, setQuery] = useState('');
	const [selectedMovieID, setSelectedMovieID] = useState(null);
	const [watched, setWatched] = useLocalStorageState([], 'watched');
	const handleSelectedMovie = (movie) => {
		let { imdbID } = movie;
		setSelectedMovieID((prev) => (prev === imdbID ? null : imdbID));
	};
	const resetMovieSelectedHandler = () => {
		setSelectedMovieID(null);
	};
	const addToWatchedHandler = (movie, userRating) => {
		const newMovie = {
			imdbID: movie.imdbID,
			title: movie.Title,
			year: movie.Year,
			poster: movie.Poster,
			runtime: Number(movie.Runtime.split(' ').at(0)),
			imdbRating: +movie.imdbRating,
			userRating: userRating,
		};
		setWatched([...watched, newMovie]);
		resetMovieSelectedHandler();
	};
	const [error, loading, movies] = useMoives(query);
	const handleDeletedMovie = (id) => {
		console.log('handel', id);
		let newMoiveList = watched.filter((movie) => movie.imdbID !== id);
		setWatched(newMoiveList);
	};
	return (
		<>
			<NavBar>
				<Search query={query} setQuery={setQuery} />
				{movies ? (
					<SearchResultNum moviesLengthList={movies.length} />
				) : (
					<SearchResultNum moviesLengthList={0} />
				)}
			</NavBar>
			<main className='main'>
				<ListBox>
					{error && <ErrorMessage message={error} />}
					{loading && <Loader />}
					{!loading && !error && (
						<SearchMoviesList
							movies={movies}
							handleSelectedMovie={handleSelectedMovie}
						/>
					)}
				</ListBox>
				<ListBox>
					{selectedMovieID ? (
						<MovieDetails
							id={selectedMovieID}
							watched={watched}
							resetMovieSelectedHandler={resetMovieSelectedHandler}
							addToWatchedHandler={addToWatchedHandler}
						/>
					) : (
						<>
							<MoviesSummery watched={watched} />
							<WatchedMoviesList
								watched={watched}
								handleDeletedMovie={handleDeletedMovie}
							/>
						</>
					)}
				</ListBox>
			</main>
		</>
	);
}
