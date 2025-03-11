import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { route } from "../../../../shared/constants/AllRoutes";
import { FaPlus } from "react-icons/fa";
import UserManagementTopSection from "../../Component/UserManagementTopSection";
import { Table } from "react-bootstrap";
import { getRoles } from "../../../../query/roles/getRoles/getRoles.query";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../../../shared/components/Loader";
import { iconDelete, iconEdit } from "../../../../assets/images/icons";

const RolesList = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  const rolesColumns = [
    { key: "roles", label: "roles" },
    {
      key: "action",
      label: "action",
    },
  ];
  // get admin roles api
  const { data: rolesData, isLoading: isRolesLoading } = useQuery({
    queryKey: ["rolesList"],
    queryFn: getRoles,
  });

  const handleEditPermission = (role) => {
    navigate(route.editPermission(role));
  };
  return (
    <div className="userManagerment-section">
      <div className="common-main-section">
        <UserManagementTopSection
          translations={translations.userManagementTopBtn}
        />
        <div className="userList-header">
          <label className="primary-title">
            {translations.pageTitles.roles_and_permissions}
          </label>
          <button
            onClick={() => navigate(route.NotFoundPage)}
            className="add-btn"
          >
            {" "}
            {translations.add_roles} <FaPlus style={{ fontSize: "15px" }} />
          </button>
        </div>
        <Table responsive>
          <thead>
            <tr>
              {rolesColumns.map((item, index) => (
                <th
                  key={index}
                  style={{
                    textAlign: item.key === "action" ? "right" : "left",
                    padding: item.key === "action" ? "16px 60px" : "16px 60px",
                  }}
                >
                  {translations.tableFields[item.label]}
                </th>
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
                  <td
                    key={index}
                    style={{
                      textAlign: "left",
                      padding: "10px 60px",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#181D27",
                    }}
                  >
                    {row}
                  </td>
                  <td
                    style={{ textAlign: "right", padding: "10px 50px" }}
                    className="btn-section"
                  >
                    <button
                      onClick={() => handleEditPermission(row)}
                      className="action-btn"
                    >
                      <img src={iconEdit} />
                    </button>
                    <button
                      onClick={() => alert("delete Clicked")}
                      className="action-btn"
                    >
                      <img src={iconDelete} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RolesList;
