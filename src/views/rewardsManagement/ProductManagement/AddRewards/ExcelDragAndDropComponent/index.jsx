/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { iconUpload } from "../../../../../assets/images/icons";

const DragAndDropExcel = ({ file, onDrop, width = "1085px" }) => {
  const [uploadedFile, setUploadedFile] = useState(file);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const excelFile = acceptedFiles[0];
      setUploadedFile(excelFile);
      onDrop(excelFile);
    },
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.ms-excel": [],
    },
    maxFiles: 1,
    maxSize: 2000000, // 2MB
  });

  return (
    <div className="dropzon-group">
      <div {...getRootProps({ className: "dropzone", style: { width } })}>
        <input {...getInputProps()} />
        <img src={iconUpload} alt="Upload Icon" />
        <label>
          <span className="green-text">Click to upload</span> or drag and drop
        </label>
        <small>Only .xlsx and .xls files (max. 800x400px)</small>
      </div>
    </div>
  );
};

export default DragAndDropExcel;
