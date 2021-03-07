import MovieCard from './MovieCard'

const MovieList = ( {movies=[]} ) => {
    return movies.map((movie, index) => (
        <MovieCard key={movie.imdbID} title={movie.Title} posterUrl={movie.Poster} type={movie.Type} />))
}

export default MovieList;