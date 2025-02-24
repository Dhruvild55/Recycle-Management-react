const BusinessRegistration = () => {
  return (
    <div
      className="common-main-section"
      style={{ marginTop: "10px", padding: "2rem" }}
    >
      <label className="primary-title">Business Registration information</label>
      <form style={{ marginTop: "15px" }}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Business Name</label>
            <input
              type="text"
              className="form-control"
              value="Nasi Lemak Saleha"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Business category</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6 mb-3">
            <label>Business Registration Number</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessRegistration;
