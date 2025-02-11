const BusinessRegistration = () => {
  return (
    <div className="business-registration-section">
      <div className="registration-information">
        <h1 className="pr-title">Business Registration information</h1>
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
