import { iconEye } from "../../../assets/images/icons";
import ProfilePic from "../../../shared/components/ProfilePic";

export const headers = [
  { key: "transaction_id", label: "transaction_id" },
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
    key: "points-pt",
    label: "points-pt",
  },
  { key: "redemption_item", label: "redemption_item" },
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
