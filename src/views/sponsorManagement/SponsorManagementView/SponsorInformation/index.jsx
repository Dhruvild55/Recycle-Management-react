import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../assets/images/icons";
import TopSection from "../Component/TopSection";
import ProfilePic from "../../../../shared/components/ProfilePic";

const SponsorInformation = () => {
  const navigate = useNavigate();
  return (
    <div className="common-main-section">
      <div style={{ marginBottom: "20px" }}>
        <button className="back-text" onClick={() => navigate(-1)}>
          <img src={iconBack} /> Back
        </button>
      </div>
      <TopSection />
      <label className="primary-title" style={{ marginTop: "30px" }}>
        Sponsor Information
      </label>
      <div className="sponsor-info-section row">
        <div className="col-lg-3">
          <ProfilePic size={200} />
        </div>
        <div className="col-lg-9">
          <div className="fields-section">
            <div className="fields-group full-width">
              <label>Sponsor Name</label>
              <input type="text" value="McDonald’s Malaysia" readOnly />
            </div>
            <div className="fields-group full-width">
              <label>Date Created</label>
              <input type="text" value="28th January, 2025" readOnly />
            </div>
            <div className="fields-group full-width">
              <label>No. of Link Account</label>
              <input type="text" value="100 " readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorInformation;
