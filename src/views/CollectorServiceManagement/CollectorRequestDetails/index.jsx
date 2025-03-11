import { useNavigate } from "react-router-dom";
import CommonCardComponent from "../../../shared/components/CommonCardComponent";
import ProfileCardComponent from "../../../shared/components/ProfileCardComponent";

const CollectionRequestDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="common-main-section">
        <div className="header-section" style={{ marginBottom: "20px" }}>
          <div>
            <button className="back-text" onClick={() => navigate(-1)}>
              &larr; BACK
            </button>
          </div>
        </div>
        <div className="main-section row ">
          <div className="profile-section col-lg-4 col-sm-12">
            <ProfileCardComponent />
          </div>
          <div className="details-section col-lg-8 col-sm-12">
            <div className="title">
              <p className="primary-title">Collector Information</p>
              <div className="information row">
                <div className="left-section col-lg-6 col-sm-12">
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
                <div className=" right-section col-lg-6 col-sm-12">
                  <p>
                    <strong className="heading">Unit No.</strong>{" "}
                    <span>No. 15-10/1 </span>
                  </p>
                  <p>
                    <strong>Address</strong>
                    <span>Lorong Sentul 15/39, Taman Sentul Jaya</span>
                  </p>
                  <p>
                    <strong>City</strong>
                    <span>Simpang Ampat</span>
                  </p>
                  <div>
                    <p>
                      <strong>State / Province</strong>
                      <span>Pulau Pinang</span>
                    </p>
                    <p>
                      <strong>Postcode</strong>
                      <span> 14100</span>
                    </p>
                  </div>
                  <p>
                    <strong>Country</strong>
                    <span>Malaysia</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="primary-title">Compound Images</p>
          <div className="compound-images-section">
            <CommonCardComponent
              image="/images/addressimg-2.png"
              title="TITLE 1"
              description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
            />
            <CommonCardComponent
              image="/images/addressimg-2.png"
              title="TITLE 1"
              description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
            />
            <CommonCardComponent
              image="/images/addressimg-2.png"
              title="TITLE 1"
              description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
            />
          </div>
        </div>
      </div>
      <div className="common-main-section" style={{ marginTop: "20px" }}>
        <p className="primary-title">Plastic Waste Place</p>
        <div className="compound-images-section">
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
        </div>
      </div>
      <div className="common-main-section" style={{ marginTop: "20px" }}>
        <p className="primary-title">Oil Waste Place</p>
        <div className="compound-images-section">
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
          <CommonCardComponent
            image="/images/addressimg-2.png"
            description="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies."
          />
        </div>
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", minHeight: "calc(100vh - 518px)" }}
      >
        <p className="primary-title">Approval Collector / Material</p>
        <div className="form-actions">
          <button type="submit" className="submit-button">
            Approve
          </button>
          <button type="button" className="cancel-button">
            Reject
          </button>
        </div>
      </div>
    </>
  );
};

export default CollectionRequestDetails;
