import React from "react";

const UploadFile = ({ onUpload }) => (
  <>
    <label>
      Choose file to upload
      <input type="file" onChange={onUpload} />
    </label>
  </>
);
export default UploadFile;
