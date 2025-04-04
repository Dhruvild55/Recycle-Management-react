import { iconDelete, iconEdit, iconEye } from "../../../assets/images/icons";
import ProfilePic from "../../../shared/components/ProfilePic";
import { route } from "../../../shared/constants/AllRoutes";

export const headers = (navigate, deleteReward) => [
  {
    key: "rewardName",
    label: "reward",
    width: "450",
    render: (row) => {
      return (
        <div className="d-flex align-items-center">
          <ProfilePic size={30} isChange={false} image={row.rewardImgPath} />
          <span className="ms-2">{row.rewardName}</span>
        </div>
      );
    },
  },
  {
    key: "point",
    label: "points-pt",
    width: "200",
    render: (row) => {
      return (
        <div>
          <span>{row.point} pts</span>
        </div>
      );
    },
  },
  { key: "validity", label: "validity", width: "200" },
  { key: "rewardCategoryName", label: "category", width: "300" },
  {
    key: "action",
    label: "action",
    width: "200",
    render: (row) => {
      return (
        <div className="flex gap-1">
          <button
            className="action-btn"
            onClick={() =>
              navigate(
                route.rewardsManagement.ProductManagement.View(row.rewardId),
                { state: { isEdit: true } }
              )
            }
          >
            <img src={iconEdit} />
          </button>
          <button
            className="action-btn"
            onClick={() =>
              navigate(
                route.rewardsManagement.ProductManagement.View(row.rewardId),
                { state: { isEdit: false } }
              )
            }
          >
            <img src={iconEye} />
          </button>
          <button
            className="action-btn"
            onClick={() => deleteReward(row.rewardId)}
          >
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
