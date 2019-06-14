import React from "react";
import styles from "./ShowMoreModal.module.css";

const ShowMoreModal = ({ onClose, containerRef, details }) => {
  const { title, releaseYear, type, stars } = details;
  return (
    <div className={styles.backdrop} ref={containerRef}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <h3>{releaseYear}</h3>
        <span>{type}</span>
        <p>{stars}</p>
        <button className={styles.btn_delete} type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ShowMoreModal;
