import { iconEye } from "../../../assets/images/icons";
import ProfilePic from "../../../shared/components/ProfilePic";
import { formatDate } from "../../../shared/constants/ValidationRules";

export const headers = [
  { key: "tranId", label: "transaction_id" },
  {
    key: "name",
    label: "name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic image={row.userImg} />
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
    key: "points",
    label: "points-pt",
  },
  { key: "additionalInfo", label: "redemption_item" },
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
    transaction_id: "123456",
    name: "Saleha Ismail",
    dateAndTime: "Mon., 13/01/2025",
    "points-pt": "+100 Points",
    redemption_item: "5% Subway Discount",
  },
  {
    transaction_id: "123456",
    name: "Saleha Ismail",
    dateAndTime: "Mon., 13/01/2025",
    "points-pt": "+100 Points",
    redemption_item: "5% Subway Discount",
  },
];
