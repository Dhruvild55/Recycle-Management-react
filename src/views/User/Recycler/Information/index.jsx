import { useNavigate } from "react-router-dom";
import RecyclerInfoTopSection from "../Component/RecyclerInfoTopSection";
import { iconDelete } from "../../../../assets/images/icons";
import RecyclerInformation from "./RecyclerInformation";
import BusinessRegistration from "./BusinessRegistration";
import BusinessAddress from "./BusinessAddress";

const RecyclerInformationSection = () => {
  const navigate = useNavigate();
  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <button
            className="back-text"
            onClick={() => navigate("/user-Management/recycler")}
          >
            &larr; BACK
          </button>
          <div className="right-section">
            <button className="" style={{ border: "none" }}>
              <img src={iconDelete} alt="delete icon" /> Deactivate Account
            </button>
          </div>
        </div>
        <RecyclerInfoTopSection />
        <div className="recycler-information-section">
          <RecyclerInformation />
        </div>
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", minHeight: "0px" }}
      >
        <div className="recycler-details">
          <BusinessRegistration />
        </div>
      </div>
      <BusinessAddress />
    </div>
  );
};

export default RecyclerInformationSection;
