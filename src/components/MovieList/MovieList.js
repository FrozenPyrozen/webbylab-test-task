import React from "react";
import Movie from "../Movie";

import styles from "./MovieList.module.css";

const MovieList = ({ movies = [], deleteMovie, fetchDetails, sortByName }) => (
  <div className={styles.movie_list}>
    <div className={styles.fixed}>
      <button onClick={sortByName} className={styles.btn_sort}>
        Sort By Name{" "}
      </button>
    </div>
    {movies.map(movie => (
      <Movie
        key={movie._id}
        {...movie}
        onDelete={() => deleteMovie(movie._id)}
        fetchDetails={() => fetchDetails(movie._id)}
      />
    ))}
  </div>
);

export default MovieList;
