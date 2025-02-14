const BusinessRegistration = () => {
  return (
    <div
      className="common-main-section"
      style={{ marginTop: "10px", padding: "2rem" }}
    >
      <div className="registration-information">
        <label className="primary-title">
          Business Registration information
        </label>
        <div className="registration-information-details">
          <div className="input-feild">
            <label>Business Name</label>
            <input type="text" value="Nasi Lemak Saleha" />
          </div>
          <div className="input-feild">
            <label>Business category</label>
            <input type="text" />
          </div>
          <div className="input-feild">
            <label>Business Registration Number</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistration;
