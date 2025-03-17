/* eslint-disable react/prop-types */
const BusinessRegistration = ({ businessDetails }) => {
  return (
    <div>
      <label className="primary-title">Business Registration Information</label>
      <form style={{ marginTop: "15px" }}>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label>Business Name</label>
            <input
              type="text"
              className="form-control"
              value={businessDetails?.businessName}
              readOnly
            />
          </div>
          <div className="col-md-4 mb-3">
            <label>Business category</label>
            <input
              type="text"
              className="form-control"
              value={businessDetails?.businessCategory}
              readOnly
            />
          </div>
          <div className="col-md-4 mb-3">
            <label>Business Registration Number</label>
            <input
              type="text"
              className="form-control"
              value={businessDetails?.businessRegistrationNumber}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessRegistration;
