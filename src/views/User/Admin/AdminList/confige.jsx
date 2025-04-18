import { iconDelete, iconEdit } from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { route } from "../../../../shared/constants/AllRoutes";
import { showDeleteConfirmation } from "../../../../shared/utils";

const formatDate = (dateTimeString) => {
  const isoString = dateTimeString.replace(" ", "T");
  const date = new Date(isoString);
  return isNaN(date.getTime()) ? "" : date.toISOString().split("T")[0];
};

const renderId = (row) =>
  row.id.length > 10 ? `${row.id.slice(0, 10)}...` : row.id;

const renderUserName = (row) => (
  <div className="d-flex align-items-center">
    <ProfilePic
      size={30}
      userId={row.id}
      image={row.selfiePath}
      name={row.userName}
      isChange={false}
    />
    <span className="ms-2">{row.firstName}</span>{" "}
    <span className="ms-2">{row.lastName}</span>
  </div>
);

const renderLastLogin = (row) => (
  <div className="d-flex align-items-center">
    <span>{row.lastLoginDay}</span>{" "}
    <span className="ms-2">{formatDate(row.lastLoginDate)}</span>
  </div>
);

export const headers = (
  navigate,
  deleteUserMutation,
  editPermission,
  deletePermission
) => [
  { key: "id", label: "user_id", render: renderId },
  { key: "userName", label: "name", render: renderUserName },
  { key: "roles", label: "roles" },
  { key: "phoneNumber", label: "phone_no" },
  { key: "email", label: "email" },
  { key: "lastLoginDate", label: "last_login", render: renderLastLogin },
  {
    key: "action",
    label: "action",
    render: (row) => {
      return (
        <div className="btn-section">
          {editPermission && (
            <button
              onClick={() =>
                navigate(route.userManagement.Admin.Edit(row.id), {
                  state: { userData: row },
                })
              }
              className="action-btn"
            >
              <img src={iconEdit} />
            </button>
          )}
          {deletePermission && (
            <button
              onClick={() =>
                showDeleteConfirmation(() =>
                  deleteUserMutation({ userId: row.id })
                )
              }
              className="action-btn"
            >
              <img src={iconDelete} />
            </button>
          )}
        </div>
      );
    },
  },
];
