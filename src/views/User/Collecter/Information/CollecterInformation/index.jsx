/* eslint-disable react/prop-types */
import FatPointComponent from "../../../../../shared/components/FatPointComponent";
import ProfileCardComponent from "../../../../../shared/components/ProfileCardComponent";
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
    <div className="collecter-container row">
      <div className="col-lg-4">
        <ProfileCardComponent />
      </div>
      <div className="collecter-info col-lg-8">
        <label className="primary-title">Collecter Information</label>
        <div className="collecter-details row">
          <div className="collecter-address col-lg-6">
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
          <div className="col-lg-6">
            <FatPointComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollecterInformation;
