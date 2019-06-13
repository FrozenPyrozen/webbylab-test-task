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

  // sortMoviesByNames = () =>
  //   this.props.movies.slice().sort((prev, next) => {
  //     const prevTitle = prev.title.toLowerCase();
  //     const nextTitle = next.title.toLowerCase();
  //     if (prevTitle < nextTitle) return -1;
  //     if (prevTitle > nextTitle) return 1;
  //     return 0;
  //   });

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
