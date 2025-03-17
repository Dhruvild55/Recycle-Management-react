/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const BusinessAddress = ({ businessDetailsData = {} }) => {
  const {
    city = "Subang Jaya",
    countryCode = "N/A",
    addressLine1 = "15-10/1",
    addressLine2 = "Jalan Sentosa 39/2, USJ 15",
    addressType = "N/A",
    state = "Selangor",
    zipCode = 403450,
    lattitude = 3.152,
    longitude = 101.615,
  } = businessDetailsData;

  const mapSrc = `https://maps.google.com/maps?q=${lattitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  return (
    <>
      <label className="primary-title">Business Address</label>
      <form style={{ marginTop: "15px" }}>
        <div className="row">
          <div className="col-md-6 mb-3 col-lg-5">
            <label htmlFor="unitNo">Unit No.</label>
            <input
              type="text"
              className="form-control"
              value={addressLine1}
              readOnly
            />
          </div>
          <div className="col-md-6 mb-3 col-lg-7">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={addressLine2}
              readOnly
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3 col-lg-5">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="form-control"
              value={city}
              readOnly
            />
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="state">State / Province</label>
                <input
                  type="text"
                  id="state"
                  className="form-control"
                  value={state}
                  readOnly
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="postcode">Postcode</label>
                <input
                  type="text"
                  id="postcode"
                  className="form-control"
                  value={zipCode}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3 col-lg-5">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            className="form-control"
            value="Malaysia"
            readOnly
          />
        </div>

        <div className="row">
          <div className="col-12 mb-3">
            <div className="map-container">
              <iframe title="map" src={mapSrc} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default BusinessAddress;
