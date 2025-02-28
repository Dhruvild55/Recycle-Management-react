import { iconDelete, iconEdit, iconEye } from "../../../assets/images/icons";
import ProfilePic from "../../../shared/components/ProfilePic";

export const headers = [
  {
    key: "reward",
    label: "reward",
    render: (row) => {
      console.log(row);
      return (
        <div className="d-flex align-items-center">
          <ProfilePic size={30} />
          <span className="ms-2">{row.reward}</span>
        </div>
      );
    },
  },
  { key: "points", label: "points-pt" },
  { key: "validity", label: "validity" },
  { key: "category", label: "category" },
  {
    key: "action",
    label: "action",
    render: () => {
      return (
        <div className="flex gap-1">
          <button className="action-btn">
            <img src={iconEdit} />
          </button>
          <button className="action-btn">
            <img src={iconEye} />
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
    reward: "5% Subway Discount",
    points: "100 pts",
    validity: "10 Days",
    category: "Food & Beverage",
  },
  {
    reward: "5% Subway Discount",
    points: "100 pts",
    validity: "10 Days",
    category: "Food & Beverage",
  },
  {
    reward: "5% Subway Discount",
    points: "100 pts",
    validity: "10 Days",
    category: "Food & Beverage",
  },
];
