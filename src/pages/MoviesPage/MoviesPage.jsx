import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchMovies } from "../../services/tmdb-api.js";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList.jsx";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await SearchMovies(query);
        setMovies(data);
      } catch (error) {
        setError("Failed to search movies");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchQuery = formData.get("query").trim();

    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    }
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Search Movies</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search movies..."
          className={css.input}
          autoFocus
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

      {loading && <p className={css.loading}>Searching...</p>}
      {error && <p className={css.error}>{error}</p>}
      {!loading && !error && movies.length > 0 && <MovieList movies={movies} />}
      {!loading && !error && query && movies.length === 0 && (
        <p className={css.noResults}>No movies found for "{query}"</p>
      )}
      {!query && <p className={css.hint}>Type a movie title to search</p>}
    </div>
  );
};

export default MoviesPage;
