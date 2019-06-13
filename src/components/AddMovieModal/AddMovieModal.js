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
        <form onSubmit={onSubmit}>
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
          <button type="button" onClick={() => onAddActor(star)}>
            Add actor
          </button>
        </form>
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddMovieModal;
