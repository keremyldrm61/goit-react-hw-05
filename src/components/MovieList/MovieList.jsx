import { Link, useLocation } from "react-router-dom";
import { getImageUrl } from "../../services/tmdb-api.js";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location.pathname }}
            className={css.link}
          >
            <img
              src={getImageUrl(movie.poster_path)}
              alt={movie.title || movie.name}
              className={css.poster}
            />
            <h3 className={css.title}>{movie.title || movie.name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
