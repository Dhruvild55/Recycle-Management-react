/* eslint-disable react/prop-types */
const CollecterAddressComponent = ({ userData }) => {
  return (
    <div className="collector-address">
      <div className="image-container">
        <img
          src={userData?.addressImgPath || "/images/addressImg.png"}
          alt="House"
        />
      </div>
      <div className="address-details">
        <h2>Collector Address</h2>
        <p>{userData?.address}</p>
      </div>
    </div>
  );
};

export default CollecterAddressComponent;
