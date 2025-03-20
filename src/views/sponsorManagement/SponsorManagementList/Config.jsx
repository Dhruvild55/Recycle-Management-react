import { iconEye } from "../../../assets/images/icons";
import ProfilePic from "../../../shared/components/ProfilePic";
import { route } from "../../../shared/constants/AllRoutes";

export const sponsorHeader = (navigate) => [
  {
    key: "sponsor_name",
    label: "sponsor_name",
    width: "700",
    render: (row) => {
      return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <ProfilePic
            size={30}
            userId={row.id}
            name={row.sponsor_name}
            isChange={false}
          />
          <span>{row.sponsor_name}</span>
        </div>
      );
    },
  },
  {
    key: "date_create",
    label: "date_create",
  },
  {
    key: "no_link_account",
    label: "no_link_account",
  },
  {
    key: "action",
    label: "action",
    render: (row) => {
      return (
        <button
          className="action-btn"
          onClick={() =>
            navigate(route.sponsorManagement.View.SponsorInfo(row.id))
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
