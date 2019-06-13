import * as api from "../../services/api";
import actions from "./moviesActions";

const fetchMovies = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const movies = await api.getAllMovies();

    dispatch(actions.fetchSuccess(movies));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addMovie = text => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await api.addMovie({ text });
    dispatch(actions.addMovieSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const deleteMovie = id => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    await api.deleteMovie(id);
    dispatch(actions.deleteMovieSuccess(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const fetchMoreMovieDetails = id => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    await api.getMovieById(id);
    dispatch(actions.fetchMoreMovieSuccess(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default { fetchMoreMovieDetails, fetchMovies, addMovie, deleteMovie };
