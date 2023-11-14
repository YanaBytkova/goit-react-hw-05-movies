
import css from './MoviesList.module.css';
import { Link } from 'react-router-dom';

export const MoviesList = ( movies ) => {
  const moviesList = movies.movies;

  return (
    <div>
      <ul className={css.movieList}>
            {movies !== null &&
              moviesList.map(movie => {
                return (
                  <li
                    key={movie.id}
                    className={css.movieListItem}
                  >
                    <Link to={`/movies/${movie.id}`}>
                      <h2 className={css.itemTitle}>{movie.title}</h2>
                    </Link>
                  </li>
                );
              })}
          </ul>
    </div>
  );
};
// export default MoviesList;