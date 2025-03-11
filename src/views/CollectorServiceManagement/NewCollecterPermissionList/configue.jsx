/* eslint-disable no-unused-vars */
import { iconDelete, iconView } from "../../../assets/images/icons";
import ProfilePic from "../../../shared/components/ProfilePic";
import { route } from "../../../shared/constants/AllRoutes";

export const headers = (navigate) => [
  { key: "user_id", label: "user_id" },
  {
    key: "name",
    label: "name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center">
          <ProfilePic size={30} isChange={false} />
          <span className="ms-2">{row.name}</span>
        </div>
      );
    },
  },
  { key: "reqDate", label: "reqData" },
  { key: "reqType", label: "reqType" },
  { key: "phone_no", label: "phone_no" },
  { key: "state", label: "state" },
  { key: "status", label: "status" },
  {
    key: "action",
    label: "action",
    render: () => {
      return (
        <div className="flex gap-2">
          <button
            className="action-btn"
            onClick={() => navigate(route.collectorRequestDetails)}
          >
            <img src={iconView} />
          </button>
          <button className="action-btn">
            <img src={iconDelete} />
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
