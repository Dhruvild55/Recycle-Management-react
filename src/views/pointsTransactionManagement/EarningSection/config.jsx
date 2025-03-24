import { iconEye } from "../../../assets/images/icons";
import ChipComponent from "../../../shared/components/ChipComponent";
import ProfilePic from "../../../shared/components/ProfilePic";

export const headers = [
  { key: "collectionId", label: "collectionId" },
  {
    key: "name",
    label: "name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic />
          <span>{row.name}</span>
        </div>
      );
    },
  },
  { key: "dateAndTime", label: "dateAndTime" },
  {
    key: "userType",
    label: "userType",
    render: (row) => {
      return (
        <ChipComponent
          label={row.userType}
          color={row.userType === "Recycler" ? "green" : "yellow"}
        />
      );
    },
  },
  {
    key: "points-pt",
    label: "points-pt",
  },
  { key: "materialType", label: "materialType" },
  { key: "status", label: "status" },
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
