import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../../../assets/images/icons";
import ProfilePic from "../../../../../shared/components/ProfilePic";

const PickupHistoryDetails = () => {
  const navigate = useNavigate();
  const collector = {
    name: "Suhaila Abd. Kareem",
    recyclerId: "09CCINCW",
    collectionId: "CFT 00389V",
    dateTime: "13/01/2025, 12:34pm",
    address:
      "15-10/1 Jalan Sentosa 39/2, Subang Jaya 403450 Selangor, Malaysia",
    state: "Selangor",
    imageUrl: "https://via.placeholder.com/80", // Replace with actual image URL
  };

  return (
    <div className="common-main-section" style={{ minHeight: "0px" }}>
      <button className="back-text" onClick={() => navigate(-1)}>
        <img src={iconBack} /> Back
      </button>
      <div style={{ marginTop: "20px" }}>
        <h1 className="primary-title"> Collector Collection Information</h1>
      </div>
      <div className="pickupCollectorDetails row">
        <div className="recycler-info col-lg-8">
          <div className="profile-section">
            <ProfilePic size={100} />
          </div>
          <div className="details">
            <p>
              <span>Collector Name:</span> <span>{collector.name}</span>
            </p>
            <p>
              <span>Collector ID:</span> <span>{collector.recyclerId}</span>
            </p>
            <p>
              <span>Collection ID:</span> <span>{collector.collectionId}</span>
            </p>
            <p>
              <span>Date & Time:</span> <span>{collector.dateTime}</span>
            </p>
            <p>
              <span>State:</span> <span>{collector.state}</span>
            </p>
          </div>
        </div>
        <div className="collector-section col-lg-4">
          <div className="collector-address-card">
            <div className="image-section">
              <img src="/images/addressimg-2.png" />
            </div>
            <div className="collector-info">
              <label className="name">Address</label>
              <label className="id">
                15-10/1 Jalan Sentosa 39/2, Subang Jaya 403450 Selangor,
                Malaysia
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupHistoryDetails;
