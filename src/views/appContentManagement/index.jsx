/* eslint-disable no-unused-vars */
import { FaPlus, FaTrash } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { route } from "../../shared/constants/AllRoutes";
import CustomDataTable from "../../shared/components/CustomDataTable";

const AppContentManagement = () => {
  const navigate = useNavigate();

  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <div className="appcontent-section">
      <div className="common-main-section" style={{ padding: "30px" }}>
        <div className="common-page-toolbar" style={{ marginTop: "0px" }}>
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
        <div className="common-page-toolbar" style={{ marginTop: "0px" }}>
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
