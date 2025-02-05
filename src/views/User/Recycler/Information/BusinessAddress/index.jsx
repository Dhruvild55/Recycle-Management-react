const BusinessAddress = () => {
  return (
    <div className="business-address-form">
      <h2>Business Address</h2>
      <form>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="unitNo">Unit No.</label>
            <input
              type="text"
              id="unitNo"
              className="form-control"
              placeholder="15-10/1"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="form-control"
              placeholder="Jalan Sentosa 39/2, USJ 15"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="form-control"
              placeholder="Subang Jaya"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="state">State / Province</label>
            <input
              type="text"
              id="state"
              className="form-control"
              placeholder="Selangor"
            />
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="postcode">Postcode</label>
          <input
            type="text"
            id="postcode"
            className="form-control"
            placeholder="403450"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            className="form-control"
            placeholder="Malaysia"
          />
        </div>

        <div className="row">
          <div className="col-12 mb-3">
            <div className="map-container">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Jalan%20Sentosa%2039/2,%20USJ%2015&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default BusinessAddress;
