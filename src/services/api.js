import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
const MOVIES_PATH = "/movies";

/*
 * Use axios for http requests
 *
 * More information: https://github.com/axios/axios
 */

export const getAllMovies = async () => {
  try {
    const res = await axios.get(`${MOVIES_PATH}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async id => {
  try {
    const res = await axios.get(`${MOVIES_PATH}/${id}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async id => {
  try {
    const res = await axios.delete(`${MOVIES_PATH}/${id}`);

    return res.status === 200;
  } catch (error) {
    console.log(error);
  }
};

export const addMovie = async movie => {
  try {
    const res = await axios.post(`${MOVIES_PATH}`, movie);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
