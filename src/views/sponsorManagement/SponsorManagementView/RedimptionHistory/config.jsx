import ChipComponent from "../../../../shared/components/ChipComponent";
import ProfilePic from "../../../../shared/components/ProfilePic";

export const HeadersData = [
  {
    key: "reward_name",
    label: "reward-name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic />
          <span>{row.reward_name}</span>
        </div>
      );
    },
  },
  {
    key: "user_name",
    label: "user-name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic />
          <span>{row.user_name}</span>
        </div>
      );
    },
  },
  { key: "point_spent", label: "point-spent" },
  { key: "date_time", label: "dateAndTime" },
  {
    key: "status",
    label: "status",
    render: (row) => {
      return (
        <ChipComponent
          label={row.status}
          color={
            row.status === "Redeemed"
              ? "green"
              : row.status === "Expired"
              ? "yellow"
              : "blue"
          }
        />
      );
    },
  },
];

export const RedimptionHistoryData = [
  {
    reward_name: "5% Subway Discount",
    user_name: "John Doe",
    point_spent: "100 Points",
    date_time: "12/12/12 15:00",
    status: "Redeemed",
  },
  {
    reward_name: "5% Subway Discount",
    user_name: "John Doe",
    point_spent: "100 Points",
    date_time: "12/12/12 15:00",
    status: "Expired",
  },
  {
    reward_name: "5% Subway Discount",
    user_name: "John Doe",
    point_spent: "100 Points",
    date_time: "12/12/12 15:00",
    status: "Claimed",
  },
];
