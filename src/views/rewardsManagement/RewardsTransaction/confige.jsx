import ProfilePic from "../../../shared/components/ProfilePic";
import { iconEye } from "../../../assets/images/icons";
import { route } from "../../../shared/constants/AllRoutes";
import ChipComponent from "../../../shared/components/ChipComponent";

export const headers = (navigate) => [
  {
    key: "rewardName",
    label: "reward-name",
    render: (row) => {
      return (
        <div className="d-flex  align-items-center">
          <ProfilePic isChange={false} image={row.rewardImg} />
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
          <ProfilePic isChange={false} image={row.userImg} />
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
          <ChipComponent
            label={row.status}
            color={
              row.status === "Redeemed"
                ? "green"
                : row.status === "Claimed"
                ? "blue"
                : "yellow"
            }
          />
        </div>
      );
    },
  },
  {
    key: "action",
    label: "action",
    render: (row) => {
      return (
        <div>
          <button
            className="action-btn"
            onClick={() =>
              navigate(route.rewardsManagement.RewardsTransaction.View(row.id))
            }
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
