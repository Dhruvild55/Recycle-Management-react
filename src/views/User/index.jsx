/* eslint-disable no-unused-vars */
import { lazy, Suspense, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { approveUsers } from "../../query/users/approveUser/approveUser.query";
import { ReactToastify } from "../../shared/utils";
import ButtonComponent from "../../shared/components/Buttoncomponent";

const AdminList = lazy(() => import("./Admin/Admin-list"));
const RecyclerList = lazy(() => import("./Recycler/Recycler-List"));
const RolesList = lazy(() => import("./Admin And Roles/Roles-List"));
const CollecterList = lazy(() => import("./Collecter/Collecter-List"));

function UserManagement() {
  const [isSelectedBtn, setisSelectedBtn] = useState("Admin");

  useEffect(() => {
    document.title = "User Managemant | Recycle Management ";
  }, []);

  // approve user mutation
  const { mutate: approveUserMutation, isPending: isApproveUser } = useMutation(
    {
      mutationFn: approveUsers,
      onSuccess: (data) => {
        console.log("User approved successfully", data);
        ReactToastify(data.message, "success");
      },
      onError: (error) => {
        console.error("Error approving user:", error);
        ReactToastify("User approved failed", "error");
      },
    }
  );

  const handleButtonClick = (role) => {
    setisSelectedBtn(role);
  };

  const componentMap = {
    Admin: AdminList,
    Recycler: RecyclerList,
    Collecter: CollecterList,
    "admin roles": RolesList,
  };

  const SelectedComponent = componentMap[isSelectedBtn];

  return (
    <div className="userManagerment-section">
      <div className="userList-section ">
        <div className="userManagement-top-section">
          <ButtonComponent
            label="Admin"
            onClick={() => handleButtonClick("Admin")}
            className={`btn${isSelectedBtn === "Admin" ? " selected" : ""}`}
          />
          <ButtonComponent
            label="Recycler"
            onClick={() => handleButtonClick("Recycler")}
            className={`btn${isSelectedBtn === "Recycler" ? " selected" : ""}`}
          />
          <ButtonComponent
            label="Collecter"
            onClick={() => handleButtonClick("Collecter")}
            className={`btn${isSelectedBtn === "Collecter" ? " selected" : ""}`}
          />
          <ButtonComponent
            label="Admin Roles and Permissions"
            onClick={() => handleButtonClick("admin roles")}
            className={`btn${
              isSelectedBtn === "admin roles" ? " selected" : ""
            }`}
          />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {SelectedComponent && <SelectedComponent Role={isSelectedBtn} />}
        </Suspense>
      </div>
    </div>
  );
}

export default UserManagement;
