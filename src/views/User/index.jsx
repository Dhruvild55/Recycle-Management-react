/* eslint-disable no-unused-vars */
import { useEffect, useState, Suspense, lazy } from "react";
import ButtonComponent from "../../shared/components/Buttoncomponent";
import { useSelector } from "react-redux";

// Lazy load all list components
const AdminList = lazy(() => import("./Admin/Admin-list"));
const RecyclerList = lazy(() => import("./Recycler/Recycler-List"));
const CollecterList = lazy(() => import("./Collecter/Collecter-List"));
const RolesList = lazy(() => import("./Admin And Roles/Roles-List"));

function UserManagement() {
  // State to track which button is selected
  const [selectedRole, setSelectedRole] = useState("Admin");
  const translations = useSelector((state) => state.settings.translations);

  useEffect(() => {
    document.title = "User Management | Recycle Management ";
    console.log("hello");
  }, []);

  const renderSelectedComponent = () => {
    switch (selectedRole) {
      case "Admin":
        return <AdminList Role="Admin" />;
      case "Recycler":
        return <RecyclerList Role="Recycler" />;
      case "Collector":
        return <CollecterList Role="Collector" />;
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
          <ButtonComponent
            label={translations.admin}
            onClick={() => setSelectedRole("Admin")}
            className={`btn${selectedRole === "Admin" ? " selected" : ""}`}
          />
          <ButtonComponent
            label={translations.recycler}
            onClick={() => setSelectedRole("Recycler")}
            className={`btn${selectedRole === "Recycler" ? " selected" : ""}`}
          />
          <ButtonComponent
            label={translations.collector}
            onClick={() => setSelectedRole("Collector")}
            className={`btn${selectedRole === "Collector" ? " selected" : ""}`}
          />
          <ButtonComponent
            label={translations.admin_rols_and_Permissions}
            onClick={() => setSelectedRole("Roles")}
            className={`btn${selectedRole === "Roles" ? " selected" : ""}`}
          />
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
