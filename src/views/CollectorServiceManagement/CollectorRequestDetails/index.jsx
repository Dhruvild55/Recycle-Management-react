import ProfileCardComponent from "../../../shared/components/ProfileCardComponent";

const CollectionRequestDetails = () => {
  return (
    <div className="common-main-section">
      <div className="header-section">
        <div>
          <button className="back-text">&larr; BACK</button>
        </div>
      </div>
      <div
        className="main-section"
        style={{ marginTop: "30px", display: "flex" }}
      >
        <div className="profile">
          <ProfileCardComponent />
        </div>
        <div className="details">
          <p>Collector Information</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionRequestDetails;
