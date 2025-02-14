import { useState } from "react";
import { iconDelete } from "../../../../assets/images/icons";
import ButtonComponent from "../../../../shared/components/Buttoncomponent";
import CollecterInformation from "../Information/CollecterInformation";
import StorageInformation from "../Information/StorageInformation";
import { useNavigate } from "react-router-dom";
import { route } from "../../../../shared/constants/AllRoutes";

const CollecterProfile = () => {
  const [selectedButton, setSelectedButton] = useState("collecter-information");
  const handleBtnclick = (value) => {
    setSelectedButton(value);
  };
  const navigate = useNavigate();
  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <div className="left-side">
            <button
              className="back-text"
              onClick={() => navigate(route.userManagement)}
            >
              &larr; BACK
            </button>
          </div>
          <div className="right-side">
            <img src={iconDelete} />
            <span>Suspend Collection Status</span>
          </div>
        </div>
        <div className="tabs-section">
          <ButtonComponent
            label="Collecter Information"
            onClick={() => handleBtnclick("collecter-information")}
            className={`btn${
              selectedButton === "collecter-information" ? " selected" : ""
            }`}
          />
          <ButtonComponent
            label="Pickup History"
            onClick={() => handleBtnclick("pickup-history")}
            className={`btn${
              selectedButton === "pickup-history" ? " selected" : ""
            }`}
          />
          <ButtonComponent
            label="Clearance"
            onClick={() => handleBtnclick("clearance")}
            className={`btn${
              selectedButton === "clearance" ? " selected" : ""
            }`}
          />
        </div>
        {selectedButton === "collecter-information" ? (
          <div>
            <CollecterInformation />
          </div>
        ) : (
          <div> </div>
        )}
      </div>
      <div className="profile-details-section">
        {selectedButton === "collecter-information" ? (
          <div>
            <StorageInformation />
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
};

export default CollecterProfile;
