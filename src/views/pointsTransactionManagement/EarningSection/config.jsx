import { iconEye } from "../../../assets/images/icons";
import ChipComponent from "../../../shared/components/ChipComponent";
import ProfilePic from "../../../shared/components/ProfilePic";
import { formatDate } from "../../../shared/constants/ValidationRules";

export const headers = [
  { key: "requestId", label: "collectionId" },
  {
    key: "userName",
    label: "name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic />
          <span>{row.userName}</span>
        </div>
      );
    },
  },
  {
    key: "dateTime",
    label: "dateAndTime",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <span>{formatDate(row.dateTime)}</span>
        </div>
      );
    },
  },
  {
    key: "userType",
    label: "userType",
    render: (row) => {
      const userType =
        row.userType === "B2B Recycler"
          ? "Recycler"
          : row.userType === "B2C Recycler"
          ? "Recycler"
          : row.userType === "B2B Collector"
          ? "Collector"
          : row.userType === "B2C Collector"
          ? "Collector"
          : "";
      return (
        <ChipComponent
          label={userType}
          color={userType === "Recycler" ? "green" : "yellow"}
        />
      );
    },
  },
  {
    key: "points",
    label: "points-pt",
    render: (row) => {
      return (
        <span>
          +{row.points}
          {"  "}pts
        </span>
      );
    },
  },
  { key: "materialType", label: "materialType" },
  {
    key: "status",
    label: "status",
    render: (row) => {
      return (
        <div
          className="flex gap-2"
          style={{ alignItems: "center", display: "flex" }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: row.status === "Pending" ? "#C6C6C6" : "#00DE4E",
              borderRadius: "20px",
            }}
          ></div>
          <span>{row.status}</span>
        </div>
      );
    },
  },
  {
    key: "action",
    label: "action",
    render: () => {
      return (
        <div>
          <button className="action-btn">
            <img src={iconEye} />
          </button>
        </div>
      );
    },
  },
];

export const data = [
  {
    collectionId: "123456",
    name: "Saleha Ismail",
    dateAndTime: "Mon., 13/01/2025",
    userType: "Recycler",
    "points-pt": "+100 Points",
    materialType: "Used Cooking Oil",
    status: "Pending",
  },
  {
    collectionId: "123456",
    name: "Saleha Ismail",
    dateAndTime: "Mon., 13/01/2025",
    userType: "Collector",
    "points-pt": "+100 Points",
    materialType: "Used Cooking Oil",
    status: "Pending",
  },
];
