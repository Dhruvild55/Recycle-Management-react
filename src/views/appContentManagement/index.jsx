/* eslint-disable no-unused-vars */
import { FaPlus } from "react-icons/fa6";
import { iconDelete, iconEdit } from "../../assets/images/icons";
import CustomTable from "../../shared/components/CustomTable";
import ProfilePic from "../../shared/components/ProfilePic";
import { useNavigate } from "react-router-dom";
import { route } from "../../shared/constants/AllRoutes";

const AppContentManagement = () => {
  const navigate = useNavigate();
  const headres = [
    {
      key: "wasteCategory",
      label: "Waste Category",
      render: (row) => (
        <div className="d-flex align-items-center">
          <ProfilePic
            size={30}
            userId={row.id}
            image={row.selfiePath}
            name={row.userName}
          />
          <span className="ms-2">{row.wasteCategory}</span>
        </div>
      ),
    },
    { key: "status", label: "Status" },
    { key: "updated", label: "Updated" },
    {
      key: "action",
      label: "Action",
      render: (row) => (
        <div className="flex gap-2">
          <button onClick={() => alert("Edit clicked")} className="action-btn">
            <img src={iconEdit} />
          </button>
          <button className="action-btn">
            <img src={iconDelete} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    { wasteCategory: "oil", status: "published", updated: "17/01/2024" },
    { wasteCategory: "Metal", status: "published", updated: "17/01/2024" },
    { wasteCategory: "Plastic", status: "published", updated: "17/01/2024" },
    { wasteCategory: "Paper", status: "published", updated: "17/01/2024" },
    { wasteCategory: "Glass", status: "published", updated: "17/01/2024" },
    { wasteCategory: "Food waste", status: "published", updated: "17/01/2024" },
    { wasteCategory: "textiles", status: "published", updated: "17/01/2024" },
  ];

  return (
    <div className="appcontent-section">
      <div className="common-main-section" style={{ padding: "30px" }}>
        <div className="title-section">
          <label className="primary-title">Material & Service Management</label>
          <button className="add-btn" onClick={() => navigate(route.addWaste)}>
            Add Material <FaPlus style={{ fontSize: "15px" }} />
          </button>
        </div>
        <CustomTable headers={headres} data={data} />
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", padding: "30px" }}
      >
        <div className="title-section">
          <label className="primary-title">
            Guidelines & Terms & Condition
          </label>
          <button
            className="add-btn"
            onClick={() => navigate(route.addGuidelines)}
          >
            Add Services <FaPlus style={{ fontSize: "15px" }} />
          </button>
        </div>
        <CustomTable headers={headres} data={data} />
      </div>
    </div>
  );
};

export default AppContentManagement;
