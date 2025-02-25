import ProfileCardComponent from "../../../../../shared/components/ProfileCardComponent";
import CollecterAddressComponent from "../../CollecterAddressCard";

const CollecterInformation = () => {
  return (
    <div className="collecter-container">
      <ProfileCardComponent />
      <div className="collecter-info">
        <label className="primary-title">Collecter Information</label>
        <div className="collecter-details">
          <div className="collecter-address">
            <CollecterAddressComponent />
            <div className="extra-details">
              <p>User ID #SF0038</p>
              <p>Category B2C</p>
              <p>Join Date 24 November 2023</p>
            </div>
          </div>
          <div className="points-container">
            <div className="top-section">
              <p>Fat Pointes</p>
            </div>
            <div className="middle-section">
              <img src="/images/points-badge.png" />
              <h1 className="points-text">18,000</h1>
            </div>
            <div className="bottom-section">
              <p>Last updated 24 Dec, 15:05</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollecterInformation;
