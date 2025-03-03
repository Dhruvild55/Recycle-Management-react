import { useNavigate } from "react-router-dom";
import ProfilePic from "../../../../shared/components/ProfilePic";

const ViewRewardsTransaction = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="common-main-section">
        <div className="header-section">
          <button className="back-text" onClick={() => navigate(-1)}>
            &larr; BACK
          </button>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h1 className="primary-title">Reward Transaction Detail</h1>
        </div>
        <div className="form-container-rewards">
          <div className="image-section" style={{ paddingTop: "20px" }}>
            <ProfilePic size={200} />
          </div>
          <div className="fields-section">
            <div className="fields-group">
              <label>Reward Name</label>
              <input type="text" value="5% Subway Discount" readOnly />
            </div>
            <div className="fields-group">
              <label>Redeem Date</label>
              <input type="text" value="28th February, 2025" readOnly />
            </div>
            <div className="fields-group">
              <label>Point Spent</label>
              <input type="text" value="100 pts" readOnly />
            </div>
            <div className="fields-group">
              <label>Claimed Date</label>
              <input type="text" value="25th February, 2025" readOnly />
            </div>
            <div className="fields-group">
              <label>Status</label>
              <input type="text" value="Redeemed" readOnly />
            </div>
            <div className="fields-group">
              <label>Validity Date</label>
              <input type="text" value="10th March, 2025" readOnly />
            </div>
          </div>
        </div>
      </div>
      <div className="common-main-section" style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <h1 className="primary-title">User Detail</h1>
        </div>
        <div className="form-container-rewards">
          <div className="image-section" style={{ paddingTop: "20px" }}>
            <ProfilePic size={200} />
          </div>
          <div className="fields-section">
            <div className="fields-group">
              <label>User ID</label>
              <input type="text" value="#SF0038" readOnly />
            </div>
            <div className="fields-group">
              <label>Email address</label>
              <input type="text" value="ahmd.mrwn@gmail.com" readOnly />
            </div>
            <div className="fields-group">
              <label>Name</label>
              <input type="text" value="Ahmad Marwan" readOnly />
            </div>
            <div className="fields-group">
              <label>Phone No.</label>
              <input type="text" value="+60174350876" readOnly />
            </div>
            <div className="fields-group full-width">
              <label>Address</label>
              <input
                type="text"
                value="15-10/1 Jalan Sentosa 39/2, Subang Jaya 403450 Selangor, Malaysia"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewRewardsTransaction;
