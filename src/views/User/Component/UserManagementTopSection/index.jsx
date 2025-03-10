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

  // Determine selected role based on current route
  const getSelectedRole = () => {
    if (location.pathname === route.recyclerList) return "Recycler";
    if (location.pathname === route.userManagement) return "Admin";
    if (location.pathname === route.collectorList) return "Collector";
    if (location.pathname === route.rolesManagement) return "Roles";
    return "Admin"; // Default to Admin
  };

  const selectedRole = getSelectedRole();

  return (
    <div className="userManagement-top-section">
      {isMobile ? (
        // Dropdown for Mobile View
        <select
          className="dropdown"
          value={selectedRole}
          onChange={(e) => navigate(route[e.target.value])}
        >
          <option value="userManagement">{admin}</option>
          <option value="recyclerList">{recycler}</option>
          <option value="collectorList">{collector}</option>
          <option value="rolesManagement">{admin_rols_and_Permissions}</option>
        </select>
      ) : (
        // Buttons for Desktop View
        <>
          <ButtonComponent
            label={admin}
            onClick={() => navigate(route.userManagement)}
            className={`btn${selectedRole === "Admin" ? " selected" : ""}`}
          />
          <ButtonComponent
            label={recycler}
            onClick={() => navigate(route.recyclerList)}
            className={`btn${selectedRole === "Recycler" ? " selected" : ""}`}
          />
          <ButtonComponent
            label={collector}
            onClick={() => navigate(route.collectorList)}
            className={`btn${selectedRole === "Collector" ? " selected" : ""}`}
          />
          <ButtonComponent
            label={admin_rols_and_Permissions}
            onClick={() => navigate(route.rolesManagement)}
            className={`btn${selectedRole === "Roles" ? " selected" : ""}`}
          />
        </>
      )}
    </div>
  );
}

export default UserManagementTopSection;
