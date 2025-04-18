import { iconDelete, iconView } from "../../../assets/images/icons";
import ChipComponent from "../../../shared/components/ChipComponent";
import ProfilePic from "../../../shared/components/ProfilePic";
import { route } from "../../../shared/constants/AllRoutes";
import { formatDate } from "../../../shared/constants/ValidationRules";
import { showDeleteConfirmation } from "../../../shared/utils";

export const headers = (navigate, deleteUserMutation) => [
  {
    key: "userId",
    label: "user_id",
    render: (row) => {
      return row.userId?.length > 10
        ? row.userId?.slice(0, 10) + "..."
        : row.userId;
    },
  },
  {
    key: "name",
    label: "name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center">
          <ProfilePic size={30} isChange={false} image={row.userImg} />
          <span className="ms-2">{row.userName}</span>
        </div>
      );
    },
  },
  {
    key: "requestDate",
    label: "reqData",
    render: (row) => {
      return <span>{formatDate(row.requestDate)}</span>;
    },
  },
  {
    key: "requestType",
    label: "reqType",
    render: (row) => {
      return (
        <span>
          {row.requestType.length > 5
            ? `${row.requestType.slice(0, 5)}...`
            : row.requestType}
        </span>
      );
    },
  },
  { key: "phoneNo", label: "phone_no" },
  { key: "state", label: "state" },
  {
    key: "status",
    label: "status",
    render: (row) => {
      return (
        <ChipComponent
          label={row.status}
          color={
            row.status === "Pending"
              ? "yellow"
              : row.status === "Approved"
              ? "green"
              : row.status === "Rejected"
              ? "blue"
              : row.status === "Notready"
              ? "yellow"
              : ""
          }
        />
      );
    },
  },
  {
    key: "action",
    label: "action",
    render: (row) => {
      return (
        <div className="flex gap-2">
          <button
            className="action-btn"
            onClick={() =>
              navigate(route.collectionServiceManagement.Details(row.userId))
            }
          >
            <img src={iconView} />
          </button>
          <button className="action-btn">
            <img
              src={iconDelete}
              onClick={() => {
                showDeleteConfirmation(() =>
                  deleteUserMutation({ userId: row.userId })
                );
              }}
            />
          </button>
        </div>
      );
    },
  },
];

export const data = [
  {
    user_id: "#SF0038",
    name: "Ahmad Marwan",
    reqDate: "13 January 2025",
    reqType: "Oil Waste/Plastic...",
    phone_no: "+60174350876",
    state: "N.Sembilan",
    status: "Pending",
  },
  {
    user_id: "#SF0038",
    name: "Ahmad Marwan",
    reqDate: "13 January 2025",
    reqType: "Oil Waste/Plastic...",
    phone_no: "+60174350876",
    state: "N.Sembilan",
    status: "Pending",
  },
  {
    user_id: "#SF0038",
    name: "Ahmad Marwan",
    reqDate: "13 January 2025",
    reqType: "Oil Waste/Plastic...",
    phone_no: "+60174350876",
    state: "N.Sembilan",
    status: "Pending",
  },
];
