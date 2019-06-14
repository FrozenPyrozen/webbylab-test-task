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

const addMovie = movie => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await api.addMovie(movie);

    if (Array.isArray(response)) {
      return dispatch(actions.addMoviesSuccess(response));
    }
    dispatch(actions.addMovieSuccess(response));
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
    const res = await api.getMovieById(id);

    dispatch(actions.fetchMoreMovieSuccess(res));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default { fetchMoreMovieDetails, fetchMovies, addMovie, deleteMovie };
