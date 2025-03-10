import { useEffect, useState, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import UserManagementTopSection from "./Component/UserManagementTopSection";

const AdminList = lazy(() => import("./Admin/Admin-list"));
const RecyclerList = lazy(() => import("./Recycler/Recycler-List"));
const CollecterList = lazy(() => import("./Collecter/Collecter-List"));
const RolesList = lazy(() => import("./Admin And Roles/Roles-List"));

function UserManagement() {
  const [selectedRole, setSelectedRole] = useState("Admin");
  const translations = useSelector(
    (state) => state.settings.translations
  ).userManagementTopBtn;

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
        return <AdminList role="Admin" />;
    }
  };

  return (
    <div className="userManagerment-section">
      <div className="common-main-section">
        {/* Use the new component */}
        <UserManagementTopSection
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          translations={translations}
        />

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
