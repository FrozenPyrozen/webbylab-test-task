import React from "react";

import ShowMoreModal from "../ShowMoreModal";

const Movie = ({
  title,
  onDelete,
  onOpenModal,
  isOpened,
  onClose,
  fetchDetails
}) => (
  <div
    style={{
      minWidth: 320,
      boxShadow:
        "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
      marginBottom: 32,
      marginRight: 8,
      marginLeft: 8,
      padding: 8,
      flex: "0 0 calc(33.3333% - 16px)",
      backgroundColor: "#fff"
    }}
  >
    <p>{title}</p>
    {isOpened && <ShowMoreModal onClose={onClose} details={fetchDetails} />}

    <hr />
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <button onClick={onDelete}>Delete</button>
      <button
        onClick={() => {
          fetchDetails();
          return onOpenModal();
        }}
      >
        Show more
      </button>
    </footer>
  </div>
);

export default Movie;
