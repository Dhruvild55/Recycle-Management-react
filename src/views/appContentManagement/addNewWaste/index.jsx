import { useState } from "react";
import DragAndDropComponent from "../../../shared/components/DragAndDropComponent";

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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="common-main-section">
      <div className="main-section">
        <div>
          <button className="back-text">Back</button>
        </div>
        <div className="title-section">
          <label className="primary-title">Add New Waste</label>
        </div>
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
            <DragAndDropComponent image={image} onDrop={onDrop} />
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
