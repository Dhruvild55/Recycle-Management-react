import { iconDelete, iconEdit } from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";

const formatDate = (dateTimeString) => {
  const isoString = dateTimeString.replace(" ", "T");
  const date = new Date(isoString);
  if (isNaN(date.getTime())) {
    return "";
  }
  return date.toISOString().split("T")[0];
};

export const headers = (deleteUserMutation) => [
  {
    key: "id",
    label: "user_id",
    render: (row) =>
      row.id.length > 10 ? `${row.id.slice(0, 10)}...` : row.id,
  },
  {
    key: "userName",
    label: "name",
    render: (row) => {
      console.log(row);
      return (
        <div className="d-flex align-items-center">
          <ProfilePic
            size={30}
            userId={row.id}
            image={row.selfiePath}
            name={row.userName}
          />
          <span className="ms-2">{row.firstName}</span>{" "}
          <span className="ms-2">{row.lastName}</span>
        </div>
      );
    },
  },
  { key: "roles", label: "roles" },
  { key: "phoneNumber", label: "phone_no" },
  { key: "email", label: "email" },
  {
    key: "lastLoginDate",
    label: "last_login",
    render: (row) => (
      <div className="d-flex align-items-center">
        <span>{row.lastLoginDay}</span>{" "}
        <span className="ms-2">{formatDate(row.lastLoginDate)}</span>
      </div>
    ),
  },
  {
    key: "action",
    label: "action",
    render: (row) => (
      <div className="btn-section">
        <button
          onClick={() => alert("This page is under Development!")}
          className="action-btn"
        >
          <img src={iconEdit} />
        </button>
        <button
          onClick={() => deleteUserMutation({ userId: row.id })}
          className="action-btn"
        >
          <img src={iconDelete} />
        </button>
      </div>
    ),
  },
];
