// collectionData.js
import ProfilePic from "../../shared/components/ProfilePic";
import { iconDelete, iconView } from "../../assets/images/icons";
import { route } from "../../shared/constants/AllRoutes";
import { formatDate } from "../../shared/constants/ValidationRules";
import { showDeleteConfirmation } from "../../shared/utils";

// Headers for Collector Collection List
export const collectorCollectionHeaders = (
  navigate,
  deleteMutate,
  editPermission,
  deletePermission
) => [
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
    render: (row) => (
      <div className="d-flex align-items-center">
        {row.collectorId === null || row.collectorId === undefined
          ? ""
          : row.collectorId.length > 10
          ? `${row.collectorId.slice(0, 10)}...`
          : row.collectorId}
      </div>
    ),
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
  {
    key: "materialType",
    label: "materialType",
    render: (row) => {
      return (
        <span>
          {row.materialType.length > 5
            ? `${row.materialType.slice(0, 5)}..`
            : row.materialType}
        </span>
      );
    },
  },
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
        {deletePermission && (
          <button
            className="action-btn"
            onClick={() => {
              showDeleteConfirmation(() => deleteMutate(row.collectionId));
            }}
          >
            <img src={iconDelete} />
          </button>
        )}
      </div>
    ),
  },
];

// Headers for Recycler Collection List
export const recyclerCollectionHeaders = (
  navigate,
  deleteMutate,
  editPermission,
  deletePermission
) => [
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
    render: (row) => (
      <div className="d-flex align-items-center">
        {row.recyclerId === null || row.recyclerId === undefined
          ? ""
          : row.recyclerId.length > 10
          ? `${row.recyclerId.slice(0, 10)}...`
          : row.recyclerId}
      </div>
    ),
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
  {
    key: "materialType",
    label: "materialType",
    render: (row) => {
      return (
        <span>
          {row.materialType.length > 5
            ? `${row.materialType.slice(0, 5)}..`
            : row.materialType}
        </span>
      );
    },
  },
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
          {deletePermission && (
            <button
              className="action-btn"
              onClick={() => {
                showDeleteConfirmation(() => deleteMutate(row.collectionId));
              }}
            >
              <img src={iconDelete} />
            </button>
          )}
        </div>
      );
    },
  },
];
