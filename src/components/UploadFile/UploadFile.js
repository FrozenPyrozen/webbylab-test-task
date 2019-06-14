import React from "react";

const UploadFile = ({ onUpload }) => (
  <>
    <label>
      Upload file
      <input type="file" onChange={onUpload} />
    </label>
  </>
);
export default UploadFile;
