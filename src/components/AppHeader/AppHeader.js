import React from "react";
import MovieFilter from "../MovieFilter";
import SearchSelect from "../SearchSelect";
import AddMovieModal from "../AddMovieModal";
import UploadFile from "../UploadFile/";

import styles from "./AppHeader.module.css";

const AppHeader = ({ onClose, onOpenModal, isOpened }) => (
  <header className={styles.header}>
    {isOpened && <AddMovieModal onClose={onClose} />}
    <button onClick={onOpenModal} className={styles.btn_add}>
      Add movie
    </button>
    <div className={styles.filter}>
      <SearchSelect />
      <MovieFilter />
    </div>
    <UploadFile />
  </header>
);

export default AppHeader;
