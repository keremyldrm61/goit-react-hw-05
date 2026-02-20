import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTllYjM4OTYyMjQ4YWFmN2FlMGI5NjYwYzZiNDY5MCIsIm5iZiI6MTc3MTU5MzE2Ni4wNzksInN1YiI6IjY5OTg1ZGNlZjhhMDYwZGQ1ZGM5OTczZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wRLTgtcv5EFgDVsEWHSYDly5QjbIB2UTrgLGoLVaz_I";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

axios.defaults.baseURL = BASE_URL;

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

export const SearchMovies = async (query, page = 1) => {
  const response = await axios.get("/search/movie", {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page,
    },
  });
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      language: "en-US",
    },
  });
  return response.data.cast;
};

export const getMovieReviews = async (movieId, page = 1) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      language: "en-US",
      page,
    },
  });
  return response.data.results;
};

export const getImageUrl = (posterPath) => {
  if (!posterPath) return null;
  return `${IMG_BASE_URL}${posterPath}`;
};
