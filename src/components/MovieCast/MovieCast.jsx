import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast, getImageUrl } from "../../services/tmdb-api.js";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (err) {
        setError("Failed to load cast information");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (loading) {
    return <p className={css.loading}>Loading cast...</p>;
  }

  if (error) {
    return <p className={css.error}>{error}</p>;
  }

  if (cast.length === 0) {
    return <p className={css.noData}>No cast information available</p>;
  }

  return (
    <ul className={css.list}>
      {cast.map((actor) => (
        <li key={actor.id} className={css.item}>
          <img
            src={
              actor.profile_path
                ? getImageUrl(actor.profile_path)
                : "https://placehold.co/100x150?text=No+Photo"
            }
            alt={actor.name}
            className={css.photo}
          />
          <div className={css.info}>
            <h4 className={css.name}>{actor.name}</h4>
            <p className={css.character}>{actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
