import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/tmdb-api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError("Failed to load reviews");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <p className={css.loading}>Loading reviews...</p>;
  }

  if (error) {
    return <p className={css.error}>{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className={css.noData}>No reviews available</p>;
  }

  return (
    <ul className={css.list}>
      {reviews.map((review) => (
        <li key={review.id} className={css.item}>
          <h4 className={css.author}>{review.author}</h4>
          <p className={css.content}>{review.content}</p>
          {review.author_details?.username && (
            <p className={css.username}>@{review.author_details.username}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
