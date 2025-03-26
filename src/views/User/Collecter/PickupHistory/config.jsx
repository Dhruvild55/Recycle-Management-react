import { iconDelete, iconView } from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { route } from "../../../../shared/constants/AllRoutes";

export const pickupHistoryHeader = (navigate) => [
  { key: "collectionId", label: "collectionId" },
  {
    key: "recyclerName",
    label: "recyclerName",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic />
          <span>{row.recyclerName}</span>
        </div>
      );
    },
  },
  { key: "dateAndTime", label: "dateAndTime" },
  { key: "depotName", label: "depotName" },
  { key: "state", label: "state" },
  { key: "material_type", label: "materialType" },
  {
    key: "action",
    label: "action",
    render: (row) => {
      return (
        <div>
          <button
            className="action-btn"
            onClick={() =>
              navigate(
                route.userManagement.Collector.Details.PickupHistory.Details(
                  row.collectionId
                )
              )
            }
          >
            <img src={iconView} />
          </button>
          <button className="action-btn">
            <img src={iconDelete} />
          </button>
        </div>
      );
    },
  },
];

export const PickupHistoryData = [
  {
    collectionId: "CFT 00389V",
    recyclerName: "Siti Azalina Othman",
    dateAndTime: "Mon., 13/01/2025",
    depotName: "Taman Rumpun, ..",
    state: "Selangor",
    material_type: "Oil/Plastic/Cl..",
  },
];
