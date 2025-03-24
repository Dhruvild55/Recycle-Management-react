import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";

const ProductDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="common-main-section">
      <button className="back-text" onClick={() => navigate(-1)}>
        <img src={iconBack} /> Back
      </button>
      <div className="row">
        <div className="col-lg-3">
          <ProfilePic size={160} />
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-6">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                value="Jerrycan"
                readOnly
              />
            </div>
            <div className="col-lg-6">
              <label>Product ID</label>
              <input
                type="text"
                className="form-control"
                value="Jerrycan"
                readOnly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                value="Jerrycan"
                readOnly
              />
            </div>
            <div className="col-lg-6">
              <label>Points Required</label>
              <input
                type="text"
                className="form-control"
                value="Jerrycan"
                readOnly
              />
            </div>
          </div>
          <div className="col-lg-12 mb-3">
            <label>Current Stock</label>
            <input
              type="text"
              className="form-control"
              value="Jerrycan"
              readOnly
            />
          </div>
          <div className="col-lg-12 mb-2">
            <label>Add/Deduct Stock</label>
            <input
              type="text"
              className="form-control"
              value="Jerrycan"
              readOnly
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              value="Jerrycan"
              readOnly
            />
          </div>
          <div className="col-lg-12 mt-3">
            <label>Product Short Description</label>
            <input
              type="textArea"
              className="form-control"
              value="A jerrycan is a sturdy container, typically made of plastic or metal, designed for safely storing and transporting oil waste, preventing spills and ensuring proper disposal."
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
