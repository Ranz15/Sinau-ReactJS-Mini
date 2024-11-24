import axios from "axios";

const baseURL = import.meta.env.VITE_BASEURL;
const APIKEY = import.meta.env.VITE_APIKEY;

const getMovies = async () => {
  const movie = await axios.get(`${baseURL}/movie/popular?api_key=${APIKEY}`);
  return movie.data.results;
};

const searchMovie = async (e) => {
  const search = await axios.get(
    `${baseURL}/search/movie?query=${e}&api_key=${APIKEY}`
  );
  return search.data;
};

export { getMovies, searchMovie };
