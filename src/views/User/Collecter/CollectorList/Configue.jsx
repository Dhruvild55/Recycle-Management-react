import { iconDelete, iconView } from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { route } from "../../../../shared/constants/AllRoutes";

export const collecterColumns = (navigate, deleteUserMutation) => [
  {
    key: "id",
    label: "user_id",
    render: (row) =>
      row.id.length > 10 ? `${row.id.slice(0, 10)}...` : row.id,
  },
  {
    key: "firstName",
    label: "name",
    render: (row) => (
      <div className="d-flex align-items-center">
        <ProfilePic
          size={30}
          userId={row.id}
          isChange={false}
          image={row.selfiePath}
          name={row.userName}
        />
        <span className="ms-2">{row.firstName}</span>{" "}
        <span className="ms-2">{row.lastName}</span>
      </div>
    ),
  },
  { key: "roles", label: "category" },
  { key: "email", label: "email" },
  { key: "phoneNumber", label: "phone_no" },
  { key: "city", label: "location" },
  {
    key: "isApprovedByAdmin",
    label: "status",
    render: (row) => (
      <div
        className="flex gap-2"
        style={{ alignItems: "center", display: "flex" }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: row.isApprovedByAdmin ? "#00DE4E" : "#C6C6C6",
            borderRadius: "20px",
          }}
        ></div>
        <span>{row.isApprovedByAdmin ? "Active" : "Not Active"}</span>
      </div>
    ),
  },
  {
    key: "action",
    label: "action",
    render: (row) => (
      <div className="btn-section">
        <button
          onClick={() => navigate(route.collectorDetails(row.id))}
          className="action-btn"
        >
          <img src={iconView} />
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
