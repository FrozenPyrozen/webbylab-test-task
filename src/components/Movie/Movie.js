import React from "react";

import ShowMoreModal from "../ShowMoreModal";
import styles from "./Movie.module.css";

/**
 * Movie card
 */

const Movie = ({
  title,
  onDelete,
  onOpenModal,
  isOpened,
  onClose,
  fetchDetails
}) => (
  <div className={styles.movie}>
    {isOpened && <ShowMoreModal onClose={onClose} details={fetchDetails} />}

    <h3>{title}</h3>
    <hr />
    <footer className={styles.footer}>
      <button
        onClick={e => {
          e.preventDefault();
          const confirmed = window.confirm(
            "Are you sure you wish to delete this item?"
          );
          if (!confirmed) {
            return;
          }
          onDelete();
        }}
        className={styles.btn_delete}
      >
        Delete
      </button>
      <button
        onClick={() => {
          fetchDetails();
          return onOpenModal();
        }}
        className={styles.btn_details}
      >
        More details
      </button>
    </footer>
  </div>
);

export default Movie;
