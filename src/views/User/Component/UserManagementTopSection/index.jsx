/* eslint-disable react/prop-types */
import { useMediaQuery } from "@mui/material";
import ButtonComponent from "../../../../shared/components/Buttoncomponent";
import { useLocation, useNavigate } from "react-router-dom";
import { route } from "../../../../shared/constants/AllRoutes";

function UserManagementTopSection({ translations }) {
  const isMobile = useMediaQuery("(max-width: 425px)"); // Check screen size
  const { admin, recycler, collector, admin_rols_and_Permissions } =
    translations;
  const location = useLocation();
  const navigate = useNavigate();

  const getSelectedRole = () => {
    if (location.pathname === route.userManagement.Recycler.List)
      return "Recycler";
    if (location.pathname === route.userManagement.Admin.List) return "Admin";
    if (location.pathname === route.userManagement.Collector.List)
      return "Collector";
    if (location.pathname === route.rolesList) return "Roles";
    return "Admin";
  };

  const selectedRole = getSelectedRole();

  return (
    <div className="common-tab-section">
      {isMobile ? (
        <select
          className="dropdown"
          value={selectedRole}
          onChange={(e) => navigate(route[e.target.value])}
        >
          <option value="Admin">{admin}</option>
          <option value="Recycler">{recycler}</option>
          <option value="Collector">{collector}</option>
          <option value="Roles">{admin_rols_and_Permissions}</option>
        </select>
      ) : (
        <>
          <ButtonComponent
            label={admin}
            onClick={() => navigate(route.userManagement.Admin.List)}
            className={`btn${selectedRole === "Admin" ? " selected" : ""}`}
          />
          <ButtonComponent
            label={recycler}
            onClick={() => navigate(route.userManagement.Recycler.List)}
            className={`btn${selectedRole === "Recycler" ? " selected" : ""}`}
          />
          <ButtonComponent
            label={collector}
            onClick={() => navigate(route.userManagement.Collector.List)}
            className={`btn${selectedRole === "Collector" ? " selected" : ""}`}
          />
          <ButtonComponent
            label={admin_rols_and_Permissions}
            onClick={() => navigate(route.rolesList)}
            className={`btn${selectedRole === "Roles" ? " selected" : ""}`}
          />
        </>
      )}
    </div>
  );
}

export default UserManagementTopSection;
