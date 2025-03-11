import { useNavigate } from "react-router-dom";

const ViewRecyclerItems = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="common-main-section">
        <h1 className="back-text" onClick={() => navigate(-1)}>
          Back
        </h1>
        <div className="" style={{ marginTop: "20px" }}>
          <p className="primary-title">DEL-12345</p>
        </div>
        <div className="container">
          <div className="left-section">
            <div className="info-row row">
              <span className="label col-4">Contact Person</span>
              <span className="value col-1">:</span>
              <span className="value col-7">Jasmine Lee</span>
            </div>
            <div className="info-row row">
              <span className="label col-4">User Mobile</span>
              <span className="value col-1">:</span>
              <span className="value col-7">(+60) 123 456 789</span>
            </div>
            <div className="info-row row">
              <span className="label col-4">Pickup Time</span>
              <span className="value col-1">:</span>
              <span className="value col-7">
                7 August 2024 (Wed) 06:00 to 09:00{" "}
                <span className="status on-schedule">On Schedule</span>
              </span>
            </div>
            <div className="info-row row">
              <span className="label col-4">Est. Points</span>
              <span className="value col-1">:</span>
              <span className="value col-7">
                178 Points <span className="status pending">Pending</span>
              </span>
            </div>
          </div>

          <div className="right-section">
            <div className="address row">
              <span className="label col-4">Address</span>
              <span className="value col-1">:</span>
            </div>
            <span className="value ms-1 row">
              No.10, Jalan PJU 8/12D, Tropicana Indah Resort Homes, 47410
              Petaling Jaya, Selangor.
            </span>
            <div className="map">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Jalan%20Sentosa%2039/2,%20USJ%2015&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="common-main-section" style={{ marginTop: "20px" }}>
        <div className="container">
          <image className="image" src="https://via.placeholder.com/150" />
        </div>
      </div>
    </>
  );
};

export default ViewRecyclerItems;
