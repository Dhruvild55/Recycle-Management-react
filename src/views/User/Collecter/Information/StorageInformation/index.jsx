import StorageAddressDetails from "../StorageComponent";

const StorageInformation = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: "10px",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h2 style={{ fontSize: "16px", fontWeight: "600" }}>Storage</h2>
      <div style={{ padding: "25Px" }}>
        <StorageAddressDetails />
      </div>
    </div>
  );
};

export default StorageInformation;
