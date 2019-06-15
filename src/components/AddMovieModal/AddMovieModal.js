import React from "react";
import styles from "./AddMovieModal.module.css";

import FormatSelect from "../FormatSelect/";
const AddMovieModal = ({
  onClose,
  containerRef,
  fields,
  onSubmit,
  onChange,
  onAddActor,
  onDeleteActor
}) => {
  const { title, releaseYear, type, star, stars } = fields;
  return (
    <div className={styles.backdrop} ref={containerRef}>
      <div className={styles.container}>
        <span className={styles.btn_close} onClick={onClose} />
        <form onSubmit={onSubmit} className={styles.form}>
          <label className={styles.label}>
            Title
            <input
              className={styles.input}
              type="text"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={onChange}
            />
          </label>
          <label className={styles.label}>
            Year
            <input
              className={styles.input}
              type="number"
              placeholder="Enter release year"
              name="releaseYear"
              value={releaseYear}
              onChange={onChange}
            />
          </label>
          <FormatSelect onChange={onChange} currentFilter={type} />

          <label className={styles.label}>
            Actors
            <ul>
              {stars.map(item => (
                <li key={item}>
                  {item}
                  <span
                    className={styles.btn_delete_actor}
                    onClick={() => onDeleteActor(item)}
                  />
                </li>
              ))}
            </ul>
          </label>
          <div className={styles.addActorContainer}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter actor full name"
              name="star"
              value={star}
              onChange={onChange}
            />
            <span
              className={styles.btn_add_actor}
              onClick={() => onAddActor(star)}
            />
          </div>

          <button className={styles.btn_submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovieModal;
