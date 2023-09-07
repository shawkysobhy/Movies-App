/** @format */

export const WatchedMovieItem = ({ movie, handleDeletedMovie }) => {
	return (
		<li>
			<img src={movie.poster} alt={`${movie.title} poster`} />
			<h3>{movie.title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{movie.imdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{movie.userRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{movie.runtime} min</span>
				</p>
				<button
					onClick={(e) => {
						handleDeletedMovie(movie.imdbID);
					}}
					className={'btn-delete'}>
					X
				</button>
			</div>
		</li>
	);
};
