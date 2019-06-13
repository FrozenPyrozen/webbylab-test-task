import React from "react";

import styles from "./SearchSelect.module.css";

const SearchSelect = ({ filterValues, currentFilter, changeFilter }) => (
  <select
    className={styles.filter}
    value={currentFilter}
    onChange={e => changeFilter(e.target.value)}
  >
    {filterValues.map(filterValue => (
      <option key={filterValue} value={filterValue}>
        {filterValue}
      </option>
    ))}
  </select>
);
export default SearchSelect;
