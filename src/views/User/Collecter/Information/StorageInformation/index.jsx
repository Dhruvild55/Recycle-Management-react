import StorageAddressDetails from "../StorageComponent";

const StorageInformation = () => {
  return (
    <div className="common-main-section" style={{ marginTop: "10px" }}>
      <label className="primary-title">Storage</label>
      <div style={{ padding: "25Px" }}>
        <StorageAddressDetails />
      </div>
    </div>
  );
};

export default StorageInformation;
