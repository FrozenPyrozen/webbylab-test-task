import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "./MovieList";

import { moviesSelectors, moviesOperations } from "../../modules/movies";

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
  deleteMovie: moviesOperations.deleteMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer);
