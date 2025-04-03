// collectionData.js
import ProfilePic from "../../shared/components/ProfilePic";
import { iconDelete, iconView } from "../../assets/images/icons";
import { route } from "../../shared/constants/AllRoutes";
import { formatDate } from "../../shared/constants/ValidationRules";

// Headers for Collector Collection List
export const collectorCollectionHeaders = (navigate) => [
  { key: "collectionId", label: "collectionId" },
  {
    key: "collectorName",
    label: "collectorName",
    render: (row) => (
      <div className="d-flex align-items-center">
        <ProfilePic size={30} isChange={false} />{" "}
        <span className="ms-2">{row.collectorName}</span>
      </div>
    ),
  },
  {
    key: "collectorId",
    label: "collectorId",
    render: (row) =>
      row.collectorId.length > 10
        ? `${row.collectorId.slice(0, 10)}...`
        : row.collectorId,
  },
  {
    key: "timestamp",
    label: "dateAndTime",
    render: (row) => {
      return <span>{formatDate(row.timestamp)}</span>;
    },
  },
  { key: "depotName", label: "depotName" },
  { key: "state", label: "state" },
  { key: "materialType", label: "materialType" },
  {
    key: "action",
    label: "action",
    render: (row) => (
      <div className="flex gap-2">
        <button
          onClick={() =>
            navigate(
              route.collectionManagement.CollectorCollection.Details(
                row.collectionId
              )
            )
          }
          className="action-btn"
        >
          <img src={iconView} />
        </button>
        <button className="action-btn">
          <img src={iconDelete} />
        </button>
      </div>
    ),
  },
];

// Headers for Recycler Collection List
export const recyclerCollectionHeaders = (navigate, deleteMutate) => [
  { key: "collectionId", label: "collectionId" },
  {
    key: "recyclerName",
    label: "recyclerName",
    render: (row) => (
      <div className="d-flex align-items-center">
        <ProfilePic size={30} isChange={false} image={row.imagePath} />{" "}
        <span className="ms-2">{row.recyclerName}</span>
      </div>
    ),
  },
  {
    key: "recyclerId",
    label: "recyclerId",
    render: (row) =>
      row.recyclerId.length > 10
        ? `${row.recyclerId.slice(0, 10)}...`
        : row.recyclerId,
  },

  {
    key: "timestamp",
    label: "dateAndTime",
    render: (row) => {
      return <span>{formatDate(row.timestamp)}</span>;
    },
  },
  { key: "state", label: "state" },
  { key: "collectorName", label: "collectorName" },
  { key: "materialType", label: "materialType" },
  {
    key: "action",
    label: "action",
    render: (row) => {
      return (
        <div className="flex gap-2">
          <button
            onClick={() =>
              navigate(
                route.collectionManagement.RecyclerCollection.Details(
                  row.collectionId
                )
              )
            }
            className="action-btn"
          >
            <img src={iconView} />
          </button>
          <button
            className="action-btn"
            onClick={() => deleteMutate(row.collectionId)}
          >
            <img src={iconDelete} />
          </button>
        </div>
      );
    },
  },
];

// Data for Collector Collection List
export const collectorCollectionData = [
  {
    collectionId: "DEL-1133002",
    recyclerName: "Rohit",
    collectorId: "09CCINCIW",
    dateAndTime: "Mon., 13/01/2025",
    state: "Melaka",
    depotName: "ABCd",
    materialType: "Plastic/Oil W..",
  },
  {
    collectionId: "DEL-1133002",
    recyclerName: "Rohit",
    collectorId: "09CCINCIW",
    dateAndTime: "Mon., 13/01/2025",
    state: "Melaka",
    depotName: "ABCd",
    materialType: "Plastic/Oil W..",
  },
  {
    collectionId: "DEL-1133002",
    recyclerName: "Rohit",
    collectorId: "09CCINCIW",
    dateAndTime: "Mon., 13/01/2025",
    state: "Melaka",
    depotName: "ABCd",
    materialType: "Plastic/Oil W..",
  },
  {
    collectionId: "DEL-1133002",
    recyclerName: "Rohit",
    collectorId: "09CCINCIW",
    dateAndTime: "Mon., 13/01/2025",
    state: "Melaka",
    depotName: "ABCd",
    materialType: "Plastic/Oil W..",
  },

  // Add more data objects as needed
];

// Data for Recycler Collection List
export const recyclerCollectionData = [
  {
    collectionId: "DEL-1133002",
    recyclerName: "Rohit",
    recyclerId: "09CCINCIW",
    dateAndTime: "Mon., 13/01/2025",
    state: "Melaka",
    collectorName: "Ahmad Marwan",
    materialType: "Plastic/Oil W..",
  },
  {
    collectionId: "DEL-1133002",
    recyclerName: "Rohit",
    recyclerId: "09CCINCIW",
    dateAndTime: "Mon., 13/01/2025",
    state: "Melaka",
    collectorName: "Ahmad Marwan",
    materialType: "Plastic/Oil W..",
  },

  // Add more data objects as needed
];
