import { useNavigate } from "react-router-dom";
import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { iconBack } from "../../../../assets/images/icons";

const BannerAdd = () => {
  const navigate = useNavigate();
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
      <div className="main-section" style={{ marginTop: "0px" }}>
        <div>
          <button className="back-text" onClick={() => navigate(-1)}>
            <img src={iconBack} /> Back
          </button>
        </div>
        <div className="title-section" style={{ marginTop: "20px" }}>
          <label className="primary-title">Add New Banner</label>
        </div>
        <form className="add-waste-form" onSubmit={handleSubmit}>
          <div className="form-group-image" style={{ marginBottom: "20px" }}>
            <DragAndDropComponent image={image} onDrop={onDrop} />
          </div>
          <div className="form-group">
            <label>
              Title <span style={{ color: "green" }}>*</span>
            </label>
            <input type="text" id="" placeholder="Type Here" />
          </div>
          <div className="form-group">
            <label>
              Sorting Priority (1-100) <span style={{ color: "green" }}>*</span>
            </label>
            <input type="text" id="" placeholder="Type Here" />
          </div>
          <div className="form-group">
            <label>
              Banner Description <span style={{ color: "green" }}>*</span>
            </label>
            <input type="text" id="" placeholder="Type Here" />
          </div>
          <div className="checkbox-group">
            <Form.Check
              type="radio"
              label="Publish"
              name="radioGroup"
              id="publish"
              className="square-radio"
            />
            <Form.Check
              type="radio"
              label="Unpublish"
              name="radioGroup"
              id="unpublish"
              className="square-radio"
            />
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

export default BannerAdd;
