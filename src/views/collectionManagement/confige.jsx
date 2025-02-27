// collectionData.js
import ProfilePic from "../../shared/components/ProfilePic";
import { iconDelete, iconView } from "../../assets/images/icons";

// Headers for Collector Collection List
export const collectorCollectionHeaders = [
  { key: "collectionId", label: "collectionId" },
  {
    key: "collectorName",
    label: "collectorName",
    render: (row) => (
      <div className="d-flex align-items-center">
        <ProfilePic size={30} />{" "}
        <span className="ms-2">{row.recyclerName}</span>
      </div>
    ),
  },
  { key: "collectorId", label: "collectorId" },
  { key: "dateAndTime", label: "dateAndTime" },
  { key: "depotName", label: "depotName" },
  { key: "state", label: "state" },
  { key: "materialType", label: "materialType" },
  {
    key: "action",
    label: "action",
    render: () => (
      <div className="flex gap-2">
        <button
          onClick={() => alert("This page is under Development!")}
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
export const recyclerCollectionHeaders = [
  { key: "collectionId", label: "collectionId" },
  {
    key: "recyclerName",
    label: "recyclerName",
    render: (row) => (
      <div className="d-flex align-items-center">
        <ProfilePic size={30} />{" "}
        <span className="ms-2">{row.recyclerName}</span>
      </div>
    ),
  },
  { key: "recyclerId", label: "recyclerId" },
  { key: "dateAndTime", label: "dateAndTime" },
  { key: "state", label: "state" },
  { key: "collectorName", label: "collectorName" },
  { key: "materialType", label: "materialType" },
  {
    key: "action",
    label: "action",
    render: () => (
      <div className="flex gap-2">
        <button
          onClick={() => alert("This page is under Development!")}
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
