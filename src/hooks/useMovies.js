import { useEffect, useState } from 'react';
const KEY = '1e6f863a';
export const useMoives = (query) => {
	const [loading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [movies, setMovies] = useState([]);
	useEffect(
		function () {
			const controller = new AbortController();
			async function fetchMovies() {
				try {
					setIsLoading(true);
					setError('');
					const res = await fetch(
						`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
						{ signal: controller.signal }
					);
					if (!res.ok)
						throw new Error('Something went wrong with fetching movies');
					const data = await res.json();
					if (data.Response === 'False') throw new Error('Movie not found');
					setMovies(data.Search);
					setError('');
				} catch (err) {
					if (err.name !== 'AbortError') {
						setError(err.message);
					}
				} finally {
					setIsLoading(false);
				}
			}
			if (query.length < 3) {
				setMovies([]);
				setError('');
				return;
			}
			fetchMovies();

			return function () {
				controller.abort();
			};
		},
		[query]
	);

	return [loading, error, movies];
};
