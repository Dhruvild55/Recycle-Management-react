/* eslint-disable react/prop-types */
import ProfilePic from "../../../../../shared/components/ProfilePic";
import CollecterAddressComponent from "../../CollecterAddressCard";

const CollecterInformation = ({ userData }) => {
  const formatDate = (dateString, showWeekday = false) => {
    if (!dateString || dateString === "0001-01-01T00:00:00") {
      return "Not Available";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      ...(showWeekday && { weekday: "long" }),
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };
  return (
    <div className="collecter-container">
      <div className="user-card">
        <div className="user-profile">
          <ProfilePic size={100} isChange={true} image={userData?.selfiePath} />
        </div>
        <div className="user-info">
          <h2>{userData?.userName}</h2>
          <h3>{userData?.email}</h3>
          <h3>{userData?.phoneNumber}</h3>
        </div>
        <div className="user-since">
          <h2>Collector Since:</h2>
          <h3>{formatDate(userData?.collectorSince, true)}</h3>
        </div>
      </div>
      <div className="collecter-info">
        <label className="primary-title">Collecter Information</label>
        <div className="collecter-details">
          <div className="collecter-address">
            <CollecterAddressComponent />
            <div className="extra-details">
              <div className="row">
                <p className="col-6">User Id</p>
                <p className="col-6">
                  {userData?.userId.length > 10
                    ? `${userData?.userId.slice(0, 10)}...`
                    : userData?.userId}
                </p>
              </div>
              <div className="row">
                <p className="col-6">Category</p>
                <p className="col-6">{userData?.category}</p>
              </div>
              <div className="row">
                <p className="col-6">Join Date</p>
                <p className="col-6">{formatDate(userData?.joinDate, false)}</p>
              </div>
            </div>
          </div>
          <div className="points-container">
            <div className="top-section">
              <p>Fat Pointes</p>
            </div>
            <div className="middle-section">
              <img src="/images/points-badge.png" />
              <h1 className="points-text">{userData?.userTotalEstPoints}</h1>
            </div>
            <div className="bottom-section">
              <p>Last updated {userData?.estPointsLastUpdate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollecterInformation;
