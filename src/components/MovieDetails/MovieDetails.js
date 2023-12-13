import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader, ErrorMessage, StartRating } from '..';
export const MovieDetails = ({
	id,
	resetMovieSelectedHandler,
	addToWatchedHandler,
	watched,
}) => {
	const KEY = '1e6f863a';
	const [loading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [movie, setMovie] = useState({});
	const [userRating, setUserRating] = useState(null);

	const handleUserRating = (rating) => {
		setUserRating(rating);
	};
	const handleAddtoWatched = (movie, userRating) => {
		if (!userRating) return;
		addToWatchedHandler(movie, userRating);
	};
	useEffect(() => {
		async function getMovieDetails(id) {
			setIsLoading(true);
			setErrorMessage('');
			try {
				let res = await axios.get(
					`https://www.omdbapi.com/?apikey=${KEY}&i=${id}`
				);
				setMovie(res.data);
			} catch (error) {
				setErrorMessage(error.message);
			} finally {
				setIsLoading(false);
			}
		}
		getMovieDetails(id);
	}, [id]);
	const {
		Title: title,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = movie;
	let isWatched = watched.map((film) => film.imdbID).includes(id);
	let watchedUserRating = watched.filter((film) => film.imdbID === id)?.[0]
		?.userRating;
	useEffect(() => {
		document.title = title;

		return () => {
			document.title = 'usePopCorn';
		};
	}, [title]);
	useEffect(() => {
		const keyEscapHandler = (e) => {
			if (e.code === 'Escape') {
				resetMovieSelectedHandler();
				console.log('clossssing');
			}
		};
		document.addEventListener('keydown', keyEscapHandler);
		return () => {
			document.removeEventListener('keydown', keyEscapHandler);
		};
	}, [resetMovieSelectedHandler]);
	return (
		<div className='details'>
			{errorMessage && <ErrorMessage message={errorMessage} />}
			{loading && <Loader />}
			{!loading && !errorMessage && (
				<>
					<header>
						<button className='btn-back' onClick={resetMovieSelectedHandler}>
							&#8592;
						</button>
						<img src={poster} alt={`Poster of ${movie} movie`} />
						<div className='details-overview'>
							<h2>{title}</h2>
							<p>
								{released} &bull; {runtime}
							</p>
							<p>{genre}</p>
							<p>
								<span>⭐️</span>
								{imdbRating} IMDb rating
							</p>
						</div>
					</header>
					<section>
						<div className='rating'>
							{isWatched ? (
								<p style={{ textAlign: 'center' }}>
									Your Rating{'  '}
									{watchedUserRating}
									{'    '}🌟
								</p>
							) : (
								<>
									<StartRating
										size='1.75rem'
										maxRating={10}
										handleUserRating={handleUserRating}
									/>
									<button
										className='btn-add'
										onClick={() => {
											handleAddtoWatched(movie, userRating);
										}}>
										Add Rating
									</button>
								</>
							)}
						</div>
						<p>
							<em>{plot}</em>
						</p>
						<p>Starring {actors}</p>
						<p>Directed by {director}</p>
					</section>
				</>
			)}
		</div>
	);
};
