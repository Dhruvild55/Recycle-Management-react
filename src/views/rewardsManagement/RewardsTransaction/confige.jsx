import ProfilePic from "../../../shared/components/ProfilePic";
import { iconEye } from "../../../assets/images/icons";
import { route } from "../../../shared/constants/AllRoutes";

export const headers = (navigate) => [
  {
    key: "rewardName",
    label: "reward-name",
    render: (row) => {
      return (
        <div className="d-flex  align-items-center">
          <ProfilePic isChange={false} />
          <span className="ms-2">{row.rewardName}</span>
        </div>
      );
    },
  },
  {
    key: "userName",
    label: "user-name",
    render: (row) => {
      return (
        <div className="d-flex  align-items-center">
          <ProfilePic isChange={false} />
          <span className="ms-2">{row.userName}</span>
        </div>
      );
    },
  },
  { key: "pointSpent", label: "point-spent" },
  { key: "validity", label: "validity" },
  {
    key: "status",
    label: "status",
    render: (row) => {
      return (
        <div>
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
          <button
            className="action-btn"
            onClick={() => navigate(route.viewRewardsTransaction)}
          >
            <img src={iconEye} />
          </button>
        </div>
      );
    },
  },
];

export const data = [
  {
    rewardName: "5% Subway Discount",
    userName: "dhruvil",
    pointSpent: "100 pts",
    validity: "10days",
    status: "Redeemed",
  },
];
