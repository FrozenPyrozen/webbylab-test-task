import { combineReducers } from "redux";
import types from "./movieActionTypes";

function moviesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.ADD_SUCCESS:
      return [payload, ...state];

    case types.ADD_MOVIES_SUCCESS:
      return [...state, ...payload];

    case types.DELETE_SUCCESS:
      return state.filter(item => item._id !== payload);

    default:
      return state;
  }
}

function itemReducer(state = "", { type, payload }) {
  switch (type) {
    case types.FETCH_MOVIE_SUCCESS:
      return payload;

    default:
      return state;
  }
}

function filterReducer(state = "", { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
}

function searchTypeReducer(state = "title", { type, payload }) {
  switch (type) {
    case types.CHANGE_SEARCH_TYPE:
      return payload;

    default:
      return state;
  }
}

function sortReducer(state = false, { type, payload }) {
  switch (type) {
    case types.SORT_FILMS_BY_NAME:
      return payload;

    default:
      return state;
  }
}

function loadingReducer(state = false, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.ADD_SUCCESS:
    case types.DELETE_SUCCESS:
    case types.ADD_MOVIES_SUCCESS:
    case types.FETCH_ERROR:
    case types.FETCH_MOVIE_SUCCESS:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;

    case types.FETCH_ERROR:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: moviesReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
  sorting: sortReducer,
  currentMovie: itemReducer,
  currentSearchType: searchTypeReducer
});
