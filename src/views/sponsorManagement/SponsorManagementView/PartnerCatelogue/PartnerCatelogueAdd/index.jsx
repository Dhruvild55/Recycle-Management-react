import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../../assets/images/icons";
import DragAndDropComponent from "../../../../../shared/components/DragAndDropComponent";
import { useState } from "react";

const PartnerCatelogueAdd = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState(""); // State for quantity

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
      <div className="partner-catelogue-add-section">
        <button className="back-text" onClick={() => navigate(-1)}>
          <img src={iconBack} /> Back
        </button>
        <div
          className="common-page-toolbar"
          style={{ marginTop: "20px", marginBottom: "20px", padding: "0px" }}
        >
          <label className="primary-title">Add new Item</label>
        </div>
      </div>
      <form className="add-waste-form" onSubmit={handleSubmit}>
        <div className="form-group-image" style={{ marginBottom: "20px" }}>
          <DragAndDropComponent image={image} onDrop={onDrop} />
        </div>
        <div className="form-group">
          <label>
            Item Name <span style={{ color: "green" }}>*</span>
          </label>
          <input type="text" id="" placeholder="Type Here" />
        </div>
        <div className="form-group">
          <label>
            Quantity <span style={{ color: "green" }}>*</span>
          </label>
          <input type="text" id="" placeholder="Type Here" />
        </div>
        <div className="form-group">
          <label>
            Validity<span style={{ color: "green" }}>*</span>
          </label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="">Select Quantity</option>
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            Points Required<span style={{ color: "green" }}>*</span>
          </label>
          <input type="text" id="" placeholder="Type Here" />
        </div>
        <div className="form-group">
          <label>
            Reward Catalogue Short Description
            <span style={{ color: "green" }}>*</span>
          </label>
          <input type="text" id="" placeholder="Type Here" />
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
  );
};

export default PartnerCatelogueAdd;
