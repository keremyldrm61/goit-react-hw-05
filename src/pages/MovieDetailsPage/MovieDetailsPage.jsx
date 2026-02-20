import { useEffect, useState, useRef } from 'react';
import { useParams, NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { getMovieDetails, getImageUrl } from '../../services/tmdb-api';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const backLinkHref = useRef(location.state?.from || '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError('Failed to load movie details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <p className={css.loading}>Loading movie details...</p>;
  }

  if (error) {
    return <p className={css.error}>{error}</p>;
  }

  if (!movie) {
    return <p className={css.error}>Movie not found</p>;
  }

  return (
    <div className={css.container}>
      <Link to={backLinkHref.current} className={css.backLink}>
        ← Go back
      </Link>

      <div className={css.movie}>
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className={css.poster}
        />
        <div className={css.info}>
          <h2 className={css.title}>{movie.title}</h2>
          <p className={css.overview}>{movie.overview}</p>
          <div className={css.details}>
            <p>
              <strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10
            </p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Genres:</strong>{' '}
              {movie.genres.map((genre) => genre.name).join(', ')}
            </p>
          </div>
        </div>
      </div>

      <nav className={css.subNav}>
        <NavLink
          to="cast"
          className={({ isActive }) =>
            isActive ? `${css.subLink} ${css.active}` : css.subLink
          }
        >
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? `${css.subLink} ${css.active}` : css.subLink
          }
        >
          Reviews
        </NavLink>
      </nav>

      <div className={css.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;