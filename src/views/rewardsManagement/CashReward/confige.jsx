import { iconEye } from "../../../assets/images/icons";
import ProfilePic from "../../../shared/components/ProfilePic";

export const headers = [
  {
    key: "userName",
    label: "user-name",
    render: (row) => {
      return (
        <div className="d-flex  align-items-center">
          <ProfilePic />
          <span className="ms-2">{row.userName}</span>
        </div>
      );
    },
  },
  { key: "pointToConvert", label: "pointToConvert" },
  { key: "ammountToReceive", label: "amountToReceive" },
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
    userName: "Saleha Ismail",
    pointToConvert: "450 pts",
    ammountToReceive: "RM 45.00",
    status: "New",
  },
];
