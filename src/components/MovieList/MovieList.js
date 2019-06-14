import React from "react";
import Movie from "../Movie";

import styles from "./MovieList.module.css";
import Loader from "../Loader/Loader";

const MovieList = ({
  movies = [],
  deleteMovie,
  fetchDetails,
  sortByName,
  isLoading
}) => (
  <div className={styles.movie_list}>
    <div className={styles.fixed}>
      <button onClick={sortByName} className={styles.btn_sort}>
        Sort By Name{" "}
      </button>
    </div>
    {isLoading ? (
      <Loader />
    ) : (
      <div>
        {movies.map(movie => (
          <Movie
            key={movie._id}
            {...movie}
            onDelete={() => deleteMovie(movie._id)}
            fetchDetails={() => fetchDetails(movie._id)}
          />
        ))}
      </div>
    )}
  </div>
);

export default MovieList;
