/* eslint-disable no-unused-vars */
import { FaPlus, FaTrash } from "react-icons/fa6";
import { iconDelete, iconEdit } from "../../assets/images/icons";
import ProfilePic from "../../shared/components/ProfilePic";
import { useNavigate } from "react-router-dom";
import { route } from "../../shared/constants/AllRoutes";
import CustomDataTable from "../../shared/components/CustomDataTable";

const AppContentManagement = () => {
  const navigate = useNavigate();

  const columns = [
    {
      field: "wasteCategory",
      headerName: "Waste Category",
      width: 700,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ProfilePic
            size={30}
            userId={params.id}
            image={params.selfiePath}
            name={params.userName}
          />
          <span>{params.row.wasteCategory}</span>
        </div>
      ),
    },
    { field: "status", headerName: "Status", width: 100 },
    { field: "updated", headerName: "Updated", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "5px" }}>
          <button
            style={{ border: "none", margin: "0px" }}
            onClick={() => alert(`${params.row.wasteCategory}Edit clicked`)}
            className="action-btn"
          >
            <img src={iconEdit} />
          </button>
          <button
            className="action-btn"
            style={{ border: "none", margin: "0px" }}
          >
            <img src={iconDelete} />
          </button>
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      wasteCategory: "oil",
      status: "published",
      updated: "17/01/2024",
    },
    {
      id: 2,
      wasteCategory: "Metal",
      status: "published",
      updated: "17/01/2024",
    },
    {
      id: 3,
      wasteCategory: "Plastic",
      status: "published",
      updated: "17/01/2024",
    },
    {
      id: 4,
      wasteCategory: "Plastic",
      status: "published",
      updated: "17/01/2024",
    },
    {
      id: 5,
      wasteCategory: "Plastic",
      status: "published",
      updated: "17/01/2024",
    },
    {
      id: 6,
      wasteCategory: "Plastic",
      status: "published",
      updated: "17/01/2024",
    },
    {
      id: 7,
      wasteCategory: "Plastic",
      status: "published",
      updated: "17/01/2024",
    },
    {
      id: 8,
      wasteCategory: "Plastic",
      status: "published",
      updated: "17/01/2024",
    },
    {
      id: 9,
      wasteCategory: "Plastic",
      status: "published",
      updated: "17/01/2024",
    },
  ];
  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <div className="appcontent-section">
      <div className="common-main-section" style={{ padding: "30px" }}>
        <div className="title-section">
          <label className="primary-title">Material & Service Management</label>
          <button className="add-btn" onClick={() => navigate(route.addWaste)}>
            Add Material <FaPlus style={{ fontSize: "15px" }} />
          </button>
        </div>
        <CustomDataTable columns={columns} rows={rows} />
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
        <CustomDataTable columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default AppContentManagement;
