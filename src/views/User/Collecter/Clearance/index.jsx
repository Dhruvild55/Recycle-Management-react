import { useNavigate } from "react-router-dom";
import { iconDelete } from "../../../../assets/images/icons";
import CollectorTopSection from "../Component/CollectorTopSection";

const Clearance = () => {
  const navigate = useNavigate();
  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <div className="left-side">
            <button className="back-text" onClick={() => navigate(-1)}>
              &larr; BACK
            </button>
          </div>
          <div className="right-side">
            <img src={iconDelete} />
            <span>Suspend Collection Status</span>
          </div>
        </div>
        <CollectorTopSection />
      </div>
    </div>
  );
};

export default Clearance;
