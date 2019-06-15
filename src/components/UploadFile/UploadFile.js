import React from "react";

import styles from "./UploadFile.module.css";

const UploadFile = ({ onUpload }) => (
  <>
    <label className={styles.label}>
      Choose a file...
      <input className={styles.input} type="file" onChange={onUpload} />
    </label>
  </>
);
export default UploadFile;
