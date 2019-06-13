import React from "react";
import styles from "./ShowMoreModal.module.css";

const ShowMoreModal = ({ onClose, containerRef, onShowDetails }) => (
  <div className={styles.backdrop} ref={containerRef}>
    <div className={styles.container}>
      {console.log(onShowDetails)}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint
        beatae, earum officia quibusdam, nesciunt facilis consequuntur maxime
        dolore ex culpa minus ipsum porro obcaecati facere a dolor voluptas
        sequi!
      </p>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

export default ShowMoreModal;
