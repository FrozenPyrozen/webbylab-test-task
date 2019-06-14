import types from "./movieActionTypes";

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter
});

const changeSearchType = event => ({
  type: types.CHANGE_SEARCH_TYPE,
  payload: event.target.value
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST
});

const fetchSuccess = movies => ({
  type: types.FETCH_SUCCESS,
  payload: movies
});

const addMovieSuccess = movie => ({
  type: types.ADD_SUCCESS,
  payload: movie
});

const deleteMovieSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error
});

const addMoviesSuccess = movies => ({
  type: types.ADD_MOVIES_SUCCESS,
  payload: movies
});

const fetchMoreMovieSuccess = item => ({
  type: types.FETCH_MOVIE_SUCCESS,
  payload: item
});

const sortFilmsByName = () => ({
  type: types.SORT_FILMS_BY_NAME
});

export default {
  addMoviesSuccess,
  changeSearchType,
  sortFilmsByName,
  fetchMoreMovieSuccess,
  addMovieSuccess,
  deleteMovieSuccess,
  changeFilter,
  fetchRequest,
  fetchSuccess,
  fetchError
};
