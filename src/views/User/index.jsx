/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { route } from "../../shared/constants/AllRoutes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { approveUsers } from "../../query/users/approveUser/approveUser.query";
import { ReactToastify } from "../../shared/utils";
import ButtonComponent from "../../shared/components/Buttoncomponent";
import { iconDelete, iconEdit } from "../../assets/images/icons";
import { getRoles } from "../../query/roles/getRoles/getRoles.query";
import { Table } from "react-bootstrap";
import AdminList from "./Admin/Admin-list";
import RecyclerList from "./Recycler/Recycler-List";
import CollecterList from "./Collecter/Collecter-List";
import RolesList from "./Admin And Roles/Roles-List";

function UserManagement() {
  const [isSelectedBtn, setisSelectedBtn] = useState("admin");
  const navigate = useNavigate();

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

  return (
    <div className="userManagerment-section">
      <div className="userList-section">
        <div className="userManagement-top-section">
          <ButtonComponent
            label="Admin"
            onClick={() => handleButtonClick("admin")}
            className={`btn${isSelectedBtn === "admin" ? " selected" : ""}`}
          />
          <ButtonComponent
            label="Recycler"
            onClick={() => handleButtonClick("recycler")}
            className={`btn${isSelectedBtn === "recycler" ? " selected" : ""}`}
          />
          <ButtonComponent
            label="Collecter"
            onClick={() => handleButtonClick("collecter")}
            className={`btn${isSelectedBtn === "collecter" ? " selected" : ""}`}
          />
          <ButtonComponent
            label="Admin Roles and Permissions"
            onClick={() => handleButtonClick("admin roles")}
            className={`btn${
              isSelectedBtn === "admin roles" ? " selected" : ""
            }`}
          />
        </div>
        {isSelectedBtn === "admin" ? (
          <AdminList />
        ) : isSelectedBtn === "recycler" ? (
          <RecyclerList />
        ) : isSelectedBtn === "collecter" ? (
          <CollecterList />
        ) : isSelectedBtn === "admin roles" ? (
          <RolesList />
        ) : (
          ""
        )}
        {/* {isSelectedBtn === "admin roles" ? (
          <div>
            <Table responsive>
              <thead>
                <tr>
                  {rolesColumns.map((item, index) => (
                    <th key={index}>{item.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rolesData?.data.map((row, index) => (
                  <tr key={index}>
                    <td key={index}>{row}</td>
                    <td>
                      <button onClick={() => handleEditPermission(row)}>
                        <img src={iconEdit} />
                      </button>
                      <button onClick={() => alert("delete Clicked")}>
                        <img src={iconDelete} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
}

export default UserManagement;
