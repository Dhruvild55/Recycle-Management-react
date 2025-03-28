import { iconEye } from "../../../assets/images/icons";
import ChipComponent from "../../../shared/components/ChipComponent";
import ProfilePic from "../../../shared/components/ProfilePic";
import { route } from "../../../shared/constants/AllRoutes";

export const headers = (navigate) => [
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
  {
    key: "pointsToConvert",
    label: "pointToConvert",
    render: (row) => {
      return (
        <span>
          {row.pointsToConvert}
          {"  pts"}
        </span>
      );
    },
  },
  {
    key: "amountToReceive",
    label: "amountToReceive",
    render: (row) => {
      return (
        <span>
          {"RM  "}
          {row.amountToReceive}
        </span>
      );
    },
  },
  {
    key: "status",
    label: "status",
    render: (row) => {
      return (
        <ChipComponent
          label={row.status}
          color={
            row.status === "Completed"
              ? "green"
              : row.status === "Rejected"
              ? "yellow"
              : "blue"
          }
        />
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
              navigate(route.rewardsManagement.CashReward.View(row.cashId))
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
    userName: "Saleha Ismail",
    pointToConvert: "450 pts",
    ammountToReceive: "RM 45.00",
    status: "New",
  },
];
