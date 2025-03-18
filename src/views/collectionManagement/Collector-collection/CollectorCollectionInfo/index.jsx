/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import ProfilePic from "../../../../shared/components/ProfilePic";

const CollectorCollectionInfo = () => {
  const navigate = useNavigate();
  const materials = [
    {
      id: "09CINCW",
      type: "Oil Waste",
      weight: 125,
      image: "/images/oilwaste.png",
    },
    {
      id: "09CINCW",
      type: "Clothing",
      weight: 59,
      image: "/images/oilwaste.png",
    },
    {
      id: "09CINCW",
      type: "Oil Waste",
      weight: 125,
      image: "/images/oilwaste.png",
    },
  ];
  const MaterialCard = ({ material }) => (
    <div className="material-card">
      <img src={material.image} alt={material.type} />
      <div className="card-content">
        <p>
          <span>Collection ID</span> <span>{material.id}</span>
        </p>
        <p>
          <span>Material Type</span> <span>{material.type}</span>
        </p>
        <p>
          <span>Material Weight (kg)</span> <span>{material.weight}</span>
        </p>
      </div>
    </div>
  );
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
    <>
      <div className="common-main-section">
        <div className="common-page-toolbar">
          <div>
            <button className="back-text" onClick={() => navigate(-1)}>
              &larr; BACK
            </button>
          </div>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h1 className="primary-title"> Collector Collection Information</h1>
        </div>
        <div className="recycler-collection row">
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
                <span>Collection ID:</span>{" "}
                <span>{collector.collectionId}</span>
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
                <p className="name">Address</p>
                <p className="id">
                  15-10/1 Jalan Sentosa 39/2, Subang Jaya 403450 Selangor,
                  Malaysia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="common-main-section" style={{ marginTop: "20px" }}>
        <h1 className="primary-title">Material Collection</h1>
        <div className="material-section">
          <div className="material-collection">
            <div className="collection-grid">
              {materials.map((material, index) => (
                <MaterialCard key={index} material={material} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectorCollectionInfo;
