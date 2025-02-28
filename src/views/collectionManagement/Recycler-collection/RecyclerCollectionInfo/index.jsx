/* eslint-disable react/prop-types */
import ProfilePic from "../../../../shared/components/ProfilePic";

const RecyclerCollectionInfo = () => {
  const recycler = {
    name: "Suhaila Abd. Kareem",
    recyclerId: "09CCINCW",
    collectionId: "CFT 00389V",
    dateTime: "13/01/2025, 12:34pm",
    address:
      "15-10/1 Jalan Sentosa 39/2, Subang Jaya 403450 Selangor, Malaysia",
    state: "Selangor",
    imageUrl: "https://via.placeholder.com/80", // Replace with actual image URL
  };

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

  const collector = {
    name: "Ahmad Marwan",
    collectorId: "#SF0038",
    imageUrl: "https://via.placeholder.com/50", // Replace with actual image URL
  };

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
  return (
    <>
      <div className="common-main-section">
        {/* Recycler Info Section */}
        <div className="header-section">
          <div>
            <button className="back-text">&larr; BACK</button>
          </div>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h1 className="primary-title">Recycler Collection Information</h1>
        </div>
        <div className="recycler-collection row">
          <div className="recycler-info col-lg-8">
            <div className="profile-section">
              <ProfilePic size={100} />
            </div>
            <div className="details">
              <p>
                <span>Recycler Name:</span> <span>{recycler.name}</span>
              </p>
              <p>
                <span>Recycler ID:</span> <span>{recycler.recyclerId}</span>
              </p>
              <p>
                <span>Collection ID:</span> <span>{recycler.collectionId}</span>
              </p>
              <p>
                <span>Date & Time:</span> <span>{recycler.dateTime}</span>
              </p>
              <p>
                <span>Address:</span> <span>{recycler.address}</span>
              </p>
              <p>
                <span>State:</span> <span>{recycler.state}</span>
              </p>
            </div>
          </div>
          {/* Collector Section */}
          <div className="collector-section col-lg-4 ">
            <p>Collector</p>
            <div className="collector-card">
              <ProfilePic size={55} />
              <div className="collector-info ">
                <p className="name">{collector.name}</p>
                <p className="id">Collector ID: {collector.collectorId}</p>
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

export default RecyclerCollectionInfo;
