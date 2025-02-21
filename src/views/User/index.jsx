import { useEffect, useState, Suspense, lazy } from "react";
import ButtonComponent from "../../shared/components/Buttoncomponent";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";

const AdminList = lazy(() => import("./Admin/Admin-list"));
const RecyclerList = lazy(() => import("./Recycler/Recycler-List"));
const CollecterList = lazy(() => import("./Collecter/Collecter-List"));
const RolesList = lazy(() => import("./Admin And Roles/Roles-List"));

function UserManagement() {
  const [selectedRole, setSelectedRole] = useState("Admin");
  const isMobile = useMediaQuery("(max-width: 425px)"); // Check screen size
  console.log("isMobile", isMobile);
  const translations = useSelector((state) => state.settings.translations);
  const { admin, recycler, collector, admin_rols_and_Permissions } =
    translations.userManagementTopBtn;

  useEffect(() => {
    document.title = "User Management | Recycle Management ";
  }, []);

  const renderSelectedComponent = () => {
    switch (selectedRole) {
      case "Admin":
        return <AdminList role="Admin" />;
      case "Recycler":
        return <RecyclerList role="Recycler" />;
      case "Collector":
        return <CollecterList role="Collector" />;
      case "Roles":
        return <RolesList />;
      default:
        return null;
    }
  };

  return (
    <div className="userManagerment-section">
      <div className="common-main-section">
        <div className="userManagement-top-section">
          {isMobile ? (
            // Dropdown for Mobile View
            <select
              className="dropdown"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="Admin">{admin}</option>
              <option value="Recycler">{recycler}</option>
              <option value="Collector">{collector}</option>
              <option value="Roles">{admin_rols_and_Permissions}</option>
            </select>
          ) : (
            // Buttons for Desktop View
            <>
              <ButtonComponent
                label={admin}
                onClick={() => setSelectedRole("Admin")}
                className={`btn${selectedRole === "Admin" ? " selected" : ""}`}
              />
              <ButtonComponent
                label={recycler}
                onClick={() => setSelectedRole("Recycler")}
                className={`btn${
                  selectedRole === "Recycler" ? " selected" : ""
                }`}
              />
              <ButtonComponent
                label={collector}
                onClick={() => setSelectedRole("Collector")}
                className={`btn${
                  selectedRole === "Collector" ? " selected" : ""
                }`}
              />
              <ButtonComponent
                label={admin_rols_and_Permissions}
                onClick={() => setSelectedRole("Roles")}
                className={`btn${selectedRole === "Roles" ? " selected" : ""}`}
              />
            </>
          )}
        </div>

        <div className="userManagement-content-section">
          <Suspense fallback={<div>Loading...</div>}>
            {renderSelectedComponent()}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
