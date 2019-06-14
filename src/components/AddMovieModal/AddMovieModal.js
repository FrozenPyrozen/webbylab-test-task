import React from "react";
import styles from "./AddMovieModal.module.css";

import FormatSelect from "../FormatSelect/";
const AddMovieModal = ({
  onClose,
  containerRef,
  fields,
  onSubmit,
  onChange,
  onAddActor
}) => {
  const { title, releaseYear, type, star, stars } = fields;
  return (
    <div className={styles.backdrop} ref={containerRef}>
      <div className={styles.container}>
        <form onSubmit={onSubmit} className={styles.form}>
          <label>
            Title
            <input
              type="text"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={onChange}
            />
          </label>
          <label>
            Year
            <input
              type="number"
              placeholder="Enter release year"
              name="releaseYear"
              value={releaseYear}
              onChange={onChange}
            />
          </label>
          <FormatSelect onChange={onChange} currentFilter={type} />

          <label>
            Actors
            <ul>
              {stars.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Enter actor full name"
              name="star"
              value={star}
              onChange={onChange}
            />
          </label>
          <button
            type="button"
            className={styles.btn_add_actor}
            onClick={() => onAddActor(star)}
          >
            Add actor
          </button>

          <div className={styles.buttons_container}>
            <button
              className={styles.btn_close}
              type="button"
              onClick={onClose}
            >
              Close
            </button>
            <button className={styles.btn_submit} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieModal;
