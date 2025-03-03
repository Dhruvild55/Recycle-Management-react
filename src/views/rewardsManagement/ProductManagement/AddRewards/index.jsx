import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import InputField from "../../../../shared/components/InputFieldComponent";

const AddRewards = () => {
  return (
    <div className="common-main-section">
      <div className="header-section">
        <button className="back-text">&larr; BACK </button>
      </div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <h1 className="primary-title">Add New Product</h1>
      </div>
      <form className="add-reward-form">
        <div style={{ marginTop: "10px" }}>
          <DragAndDropComponent />
        </div>
        <div className="form-group">
          <div style={{ marginTop: "20px" }}>
            <InputField
              label="Reward Name"
              placeholder="Type Here"
              type="text"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <InputField
              label="point(pts)"
              placeholder="Type Here"
              type="text"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <InputField
              label="Validity(days)"
              placeholder="Type Here"
              type="text"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <InputField
              label="Rewards Category"
              type="select"
              name="category"
              validation={{ required: "Category is required" }}
              options={[
                { value: "food", label: "Food & Beverage" },
                { value: "electronics", label: "Electronics" },
                { value: "fashion", label: "Fashion" },
              ]}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <InputField
              label="Type Here"
              type="textarea"
              name="description"
              placeholder="Enter product details"
              rows={6}
              validation={{ required: "Description is required" }}
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRewards;
