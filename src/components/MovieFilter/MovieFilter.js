import React from "react";
import styles from "./MovieFilter.module.css";

/*
 * Filter movies bt title or actor name
 */

const MovieFilter = ({ value = "", onChange = () => null }) => (
  <input
    value={value}
    onChange={e => onChange(e.target.value)}
    type="text"
    placeholder="Search..."
    className={styles.filter}
  />
);

export default MovieFilter;
