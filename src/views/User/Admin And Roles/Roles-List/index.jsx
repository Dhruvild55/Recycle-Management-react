/* eslint-disable no-unused-vars */
import { Table } from "react-bootstrap";
import { iconDelete, iconEdit } from "../../../../assets/images/icons";
import { getRoles } from "../../../../query/roles/getRoles/getRoles.query";
import { useQuery } from "@tanstack/react-query";
import { route } from "../../../../shared/constants/AllRoutes";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { Loader } from "../../../../shared/components/Loader";

const RolesList = () => {
  const navigate = useNavigate();
  const rolesColumns = [
    { key: "roles", label: "Roles" },
    {
      key: "action",
      label: "Action",
    },
  ];
  // get admin roles api
  const { data: rolesData, isLoading: isRolesLoading } = useQuery({
    queryKey: ["rolesList"],
    queryFn: getRoles,
  });

  const handleEditPermission = (role) => {
    navigate(route.EditPermission(role));
  };
  return (
    <div>
      <div className="userList-header">
        <label>Roles and Permissions</label>
        <div></div>
        <button onClick={() => navigate(route.addUser)}>
          {" "}
          Add Roles <FaPlus style={{ fontSize: "15px" }} />
        </button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            {rolesColumns.map((item, index) => (
              <th key={index}>{item.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isRolesLoading ? (
            <tr>
              <td colSpan="7">
                <div className="loader-container">
                  <Loader animation="border" width="15px" height="15px" />
                </div>
              </td>
            </tr>
          ) : (
            rolesData?.data.map((row, index) => (
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
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default RolesList;
