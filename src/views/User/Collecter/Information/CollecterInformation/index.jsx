import ProfileCardComponent from "../../../../../shared/components/ProfileCardComponent";
import CollecterAddressComponent from "../../CollecterAddressCard";

const CollecterInformation = () => {
  return (
    <div className="collecter-profile-body">
      <div>
        <ProfileCardComponent />
      </div>
      <div className="collecter-details">
        <label className="primary-title">Collecter Information</label>
        <CollecterAddressComponent />
        <div className="extra-details">
          <p>User ID: #SF0038</p>
          <p>Category: B2C</p>
          <p>Join Date: 24 November 2023</p>
        </div>
      </div>
    </div>
  );
};

export default CollecterInformation;
