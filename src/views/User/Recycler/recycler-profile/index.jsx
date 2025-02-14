import { useState } from "react";
import { iconDelete } from "../../../../assets/images/icons";
import ButtonComponent from "../../../../shared/components/Buttoncomponent";
import HardwareTable from "../Hardware";
import RecyclerInformation from "../Information/RecyclerInformation";
import RecyclerHistory from "../History/RecyclerHistory";
import RewardsList from "../Rewards";
import BusinessAddress from "../Information/BusinessAddress";
import BusinessRegistration from "../Information/BusinessRegistration";
import PreviousItems from "../History/PreviousItems";
import { useNavigate } from "react-router-dom";
import { route } from "../../../../shared/constants/AllRoutes";

const RecyclerProfile = () => {
  const [selectedButton, setSelectedButton] = useState("recycler-information");
  const navigate = useNavigate();

  const handleBtnClick = (value) => {
    setSelectedButton(value);
  };

  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <div>
            <button
              className="back-text"
              onClick={() => navigate(route.userManagement)}
            >
              &larr; BACK
            </button>
          </div>
          <div className="actions">
            <img src={iconDelete} alt="delete icon" />
            <span>Deactivate Account</span>
          </div>
        </div>
        <div className="tabs-section">
          <ButtonComponent
            label="Recycler Information"
            onClick={() => handleBtnClick("recycler-information")}
            className={`btn${
              selectedButton === "recycler-information" ? " selected" : ""
            }`}
          />
          <ButtonComponent
            label="Recycler History"
            onClick={() => handleBtnClick("recycler-history")}
            className={`btn${
              selectedButton === "recycler-history" ? " selected" : ""
            }`}
          />
          <ButtonComponent
            label="Rewards"
            onClick={() => handleBtnClick("rewards")}
            className={`btn${selectedButton === "rewards" ? " selected" : ""}`}
          />
          <ButtonComponent
            label="Hardware"
            onClick={() => handleBtnClick("hardware")}
            className={`btn${selectedButton === "hardware" ? " selected" : ""}`}
          />
        </div>
        {selectedButton === "recycler-information" && (
          <div className="recycler-information-section">
            <RecyclerInformation />
          </div>
        )}
        {selectedButton === "recycler-history" && (
          <div className="recycler-history">
            <label className="primary-title">Recycler History</label>
            <div className="card-wrapper">
              <RecyclerHistory />
            </div>
          </div>
        )}
        {selectedButton === "rewards" && (
          <div className="rewards">
            <label className="primary-title">Rewards History</label>
            <RewardsList />
          </div>
        )}
        {selectedButton === "hardware" && (
          <div className="hardware-section">
            <label className="primary-title">Hardware</label>
            <HardwareTable />
          </div>
        )}
      </div>
      <div className="profile-details-section">
        {selectedButton === "recycler-information" && (
          <div className="recycler-details">
            <BusinessRegistration />
            <BusinessAddress />
          </div>
        )}
        {selectedButton === "recycler-history" && (
          <div className="recycler-history">
            <PreviousItems />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecyclerProfile;
