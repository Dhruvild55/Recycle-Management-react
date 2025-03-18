/* eslint-disable no-unused-vars */
import { iconDelete, iconEdit } from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
export const columns = (handleDelete) => [
  {
    field: "materialName",
    headerName: "Waste Category",
    width: 500,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <ProfilePic
          size={30}
          userId={params.row.materialTypeId}
          image={params.row.imagePath}
          name={params.row.materialName}
          isChange={false}
        />
        <span>{params.row.materialName}</span>
      </div>
    ),
  },
  { field: "status", headerName: "Status", width: 150 },
  {
    field: "updated",
    headerName: "Updated",
    width: 200,
    renderCell: (params) => <span>{formatDate(params.row.updated)}</span>,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    sortable: false,
    renderCell: (params) => {
      console.log(params);
      return (
        <>
          <div style={{ display: "flex", gap: "5px" }}>
            <button
              style={{ border: "none", margin: "0px" }}
              onClick={() => alert(`page is under development`)}
              className="action-btn"
            >
              <img src={iconEdit} />
            </button>
            <button
              className="action-btn"
              style={{ border: "none", margin: "0px" }}
              onClick={() => handleDelete(params.row.materialTypeId)}
            >
              <img src={iconDelete} />
            </button>
          </div>
          ;
        </>
      );
    },
  },
];

export const rows = [
  {
    id: 1,
    wasteCategory: "oil",
    status: "published",
    updated: "17/01/2024",
  },
  {
    id: 2,
    wasteCategory: "Metal",
    status: "published",
    updated: "17/01/2024",
  },
  {
    id: 3,
    wasteCategory: "Plastic",
    status: "published",
    updated: "17/01/2024",
  },
  {
    id: 4,
    wasteCategory: "Plastic",
    status: "published",
    updated: "17/01/2024",
  },
  {
    id: 5,
    wasteCategory: "Plastic",
    status: "published",
    updated: "17/01/2024",
  },
  {
    id: 6,
    wasteCategory: "Plastic",
    status: "published",
    updated: "17/01/2024",
  },
  {
    id: 7,
    wasteCategory: "Plastic",
    status: "published",
    updated: "17/01/2024",
  },
  {
    id: 8,
    wasteCategory: "Plastic",
    status: "published",
    updated: "17/01/2024",
  },
  {
    id: 9,
    wasteCategory: "Plastic",
    status: "published",
    updated: "17/01/2024",
  },
];
