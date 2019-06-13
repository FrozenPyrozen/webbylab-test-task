import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
const MOVIES_PATH = "/movies";

export const getAllMovies = async () => {
  const res = await axios.get(`${MOVIES_PATH}`);

  return res.data;
};

export const getMovieById = async id => {
  const res = await axios.get(`${MOVIES_PATH}/${id}`);

  return res.data;
};

export const deleteMovie = async id => {
  const res = await axios.delete(`${MOVIES_PATH}/${id}`);

  return res.status === 200;
};

export const addMovie = async movie => {
  const res = await axios.post(`${MOVIES_PATH}`, movie);

  return res.data;
};
