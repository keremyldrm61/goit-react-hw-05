import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/tmdb-api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError("Failed to load trending movies");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (loading) {
    return <p className={css.loading}>Loading trending movies...</p>;
  }

  if (error) {
    return <p className={css.error}>{error}</p>;
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending Movies Today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
