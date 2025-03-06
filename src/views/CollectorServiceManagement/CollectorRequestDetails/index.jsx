import ProfileCardComponent from "../../../shared/components/ProfileCardComponent";

const CollectionRequestDetails = () => {
  return (
    <div className="common-main-section">
      <div className="header-section">
        <div>
          <button className="back-text">&larr; BACK</button>
        </div>
      </div>
      <div className="main-section row">
        <div className="profile-section col-lg-4 col-sm-12">
          <ProfileCardComponent />
        </div>
        <div className="details-section col-lg-8 col-sm-12">
          <div className="title">
            <p className="primary-title">Collector Information</p>
            <div className="information row">
              <div className="left-section col-lg-6">
                <p className="row">
                  <strong className="heading col">User ID</strong>{" "}
                  <span className="detail col">#SF0038</span>
                </p>
                <p className="row">
                  <strong className="heading col">Name</strong>{" "}
                  <span className="detail col">Ahmad Marwan</span>
                </p>
                <p className="row">
                  <strong className="heading col">Phone No.</strong>{" "}
                  <span className="detail col">+60174350876</span>
                </p>
                <p className="row">
                  <strong className="heading col">State</strong>{" "}
                  <span className="detail col"> N. Sembilan</span>
                </p>
                <p className="row">
                  <strong className="heading col">Request Date</strong>{" "}
                  <span className="detail col"> 13 January 2025</span>{" "}
                </p>
                <p className="row">
                  <strong className="heading col">Request Material</strong>{" "}
                  <span className="detail col">
                    {" "}
                    <ul>
                      <li>Oil Waste</li>
                      <li>Plastic Waste</li>
                      <li>Paper Waste</li>
                      <li>Metal Waste</li>
                      <li>Clothing</li>
                      <li>Food Waste</li>
                    </ul>
                  </span>
                </p>
                <p className="row">
                  <strong className="heading col">Status</strong>{" "}
                  <span className="status-pending detail col">Pending</span>
                </p>
              </div>
              <div className=" right-section col-lg-6">
                <p>
                  <strong>Unit No.:</strong> No. 15-10/1
                </p>
                <p>
                  <strong>Address:</strong> Lorong Sentul 15/39, Taman Sentul
                  Jaya
                </p>
                <p>
                  <strong>City:</strong> Simpang Ampat
                </p>
                <p>
                  <strong>State / Province:</strong> Pulau Pinang
                </p>
                <p>
                  <strong>Postcode:</strong> 14100
                </p>
                <p>
                  <strong>Country:</strong> Malaysia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionRequestDetails;
