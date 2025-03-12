import { useNavigate } from "react-router-dom";
import { iconDelete } from "../../../../assets/images/icons";
import CustomTable from "../../../../shared/components/CustomTable";
import RecyclerInfoTopSection from "../Component/RecyclerInfoTopSection";

const HardwareTable = () => {
  const navigate = useNavigate();
  const rows = [
    {
      item: "DEL-1133002",
      category: "Used Cooking Oil",
      quantity: 200,
      paymentType: "14 December 2024",
      status: 178,
    },
    {
      item: "DEL-1133002",
      category: "Used Cooking Oil",
      quantity: 200,
      paymentType: "14 December 2024",
      status: 178,
    },
    {
      item: "DEL-1133002",
      category: "Used Cooking Oil",
      quantity: 200,
      paymentType: "14 December 2024",
      status: 178,
    },
    {
      item: "DEL-1133002",
      category: "Used Cooking Oil",
      quantity: 200,
      paymentType: "14 December 2024",
      status: 178,
    },
  ];
  const headerData = [
    { key: "item", label: "item" },
    { key: "category", label: "category" },
    { key: "quantity", label: "quantity" },
    { key: "paymentType", label: "paymentType" },
    { key: "status", label: "status" },
    {
      key: "action",
      label: "action",
      render: () => <button className="view-button">View</button>,
    },
  ];
  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <button
            className="back-text"
            onClick={() => navigate("/user-Management/recycler")}
          >
            &larr; BACK
          </button>
          <div className="right-section">
            <button className="" style={{ border: "none" }}>
              <img src={iconDelete} alt="delete icon" /> Deactivate Account
            </button>
          </div>
        </div>
        <RecyclerInfoTopSection />
        <label className="primary-title">Hardware</label>
        <div className="hardware-table" style={{ marginTop: "20px" }}>
          <CustomTable headers={headerData} data={rows} />
        </div>
      </div>
    </div>
  );
};

export default HardwareTable;
