import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { iconUpload } from "../../../assets/images/icons";

const AddNewWaste = () => {
  const [wasteName, setWasteName] = useState("");
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
    maxSize: 800000, // 800KB
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="secondary-section">
      <div className="main-section">
        <button>Back</button>
        <h1>Add New Waste</h1>
        <form className="add-waste-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="wasteName">Waste Name</label>
            <input
              type="text"
              id="wasteName"
              value={wasteName}
              onChange={(e) => setWasteName(e.target.value)}
              placeholder="Type Here"
            />
          </div>
          <div className="form-group-image">
            <label>Cover Image</label>
            <div className="dropzon-group">
              <div>
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
                  <span className="green-text">Click to upload</span> or drag
                  and drop
                </label>
                <small>SVG, PNG, or JPG (max. 800x400px)</small>
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button type="button" className="btn">
              Cancel
            </button>
            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewWaste;
