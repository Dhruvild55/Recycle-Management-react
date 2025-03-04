/* eslint-disable react/prop-types */
import { useDropzone } from "react-dropzone";
import { iconUpload } from "../../../assets/images/icons";

const DragAndDropComponent = ({ image, onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
    maxSize: 800000, // 800KB
  });
  return (
    <div className="dropzon-group">
      <div className="image-container">
        {image ? (
          <img src={image.preview} alt="Preview" className="preview" />
        ) : (
          <div className="image-bg"> image </div>
        )}
      </div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <img src={iconUpload} />
        <label>
          <span className="green-text">Click to upload</span> or drag and drop
        </label>
        <small>SVG, PNG, or JPG (max. 800x400px)</small>
      </div>
    </div>
  );
};

export default DragAndDropComponent;
