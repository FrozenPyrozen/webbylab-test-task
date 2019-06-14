import React from "react";
import Movie from "../Movie";

const MovieList = ({ movies = [], deleteMovie, fetchDetails, sortByName }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      maxWidth: 1440,
      marginRight: "auto",
      marginLeft: "auto",
      padding: "0 16px",
      marginTop: 32
    }}
  >
    <button onClick={sortByName}>Sort By Name </button>
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
