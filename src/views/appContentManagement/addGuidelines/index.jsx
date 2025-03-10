import { useState } from "react";
import DragAndDropComponent from "../../../shared/components/DragAndDropComponent";
import { iconEdit } from "../../../assets/images/icons";

const AddGuidelines = () => {
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
  };
  return (
    <div className="common-main-section">
      <div className="main-section">
        <button className="back-text">Back</button>
        <div className="guidelines-header">
          <div className="left-section">
            <label className="primary-title">Guidelines</label>
          </div>
          <div className="right-section">
            <span>FILTER:</span>
            <select>
              <option>Oil Waste</option>
            </select>
          </div>
        </div>
        <div className="guideline-main-section">
          <div className="guideline-title">
            <span className="primary-title">
              Step 1 : Gather Your Recyclables
            </span>
            <button style={{ border: "none" }}>
              <img src={iconEdit} />
            </button>
          </div>
          <div className="middle-component">
            <DragAndDropComponent image={image} onDrop={onDrop} />
          </div>
          <div className="content-section" style={{ marginTop: "20px" }}>
            <p>Content Description</p>
            <p>
              As the oil waste collection day approaches, start gathering any
              used oil from your home. Check the kitchen for empty oil
              containers and the garage for any old motor oil.
            </p>
            <p>
              Make sure to sort the oil into appropriate containers: one for
              cooking oil and another for automotive oil. Seal the containers
              tightly to avoid spills.
            </p>
            <p>
              Finally, place the containers outside on the designated collection
              day for easy pickup. This small effort contributes to a cleaner
              environment and promotes responsible waste management!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGuidelines;
