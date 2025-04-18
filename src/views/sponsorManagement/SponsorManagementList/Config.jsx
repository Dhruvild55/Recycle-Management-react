import { iconEye } from "../../../assets/images/icons";
import ProfilePic from "../../../shared/components/ProfilePic";
import { route } from "../../../shared/constants/AllRoutes";

export const sponsorHeader = (navigate, formatDate) => [
  {
    key: "sponsor_name",
    label: "sponsor_name",
    width: "500",
    render: (row) => {
      return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <ProfilePic
            size={30}
            userId={row.id}
            name={row.sponsor_name}
            isChange={false}
            image={row.sponsorImg}
          />
          <span>{row.sponsorName}</span>
        </div>
      );
    },
  },
  {
    key: "activationDate",
    label: "date_create",
    render: (row) => {
      return (
        <span className="d-flex  justify-content-space-around ">
          {formatDate(row.activationDate)}
        </span>
      );
    },
  },
  {
    key: "noOfLinkedAccount",
    label: "no_link_account",
    render: (row) => {
      return (
        <span className="d-flex  justify-content-space-around">
          {row.noOfLinkedAccount}
        </span>
      );
    },
  },
  {
    key: "action",
    label: "action",
    render: (row) => {
      return (
        <button
          className="action-btn"
          onClick={() =>
            navigate(route.sponsorManagement.View.SponsorInfo(row.sponsorId))
          }
        >
          <img src={iconEye} />
        </button>
      );
    },
  },
];

export const sponsorList = [
  {
    id: 1,
    sponsor_name: "Sponsor 1",
    date_create: "2021-08-12",
    no_link_account: "No Link Account",
  },
  {
    id: 2,
    sponsor_name: "Sponsor 2",
    date_create: "2021-08-12",
    no_link_account: "No Link Account",
  },
];
