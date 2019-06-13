import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "./MovieList";

import {
  moviesSelectors,
  moviesOperations,
  moviesActions
} from "../../modules/movies";

class MovieListContainer extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return <MovieList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  movies: moviesSelectors.getFilteredMovies(state)
});

const mapDispatchToProps = {
  fetchMovies: moviesOperations.fetchMovies,
  deleteMovie: moviesOperations.deleteMovie,
  fetchDetails: moviesOperations.fetchMoreMovieDetails,
  sortByName: moviesActions.sortFilmsByName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer);
