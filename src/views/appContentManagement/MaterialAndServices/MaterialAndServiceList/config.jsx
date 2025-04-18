/* eslint-disable no-unused-vars */
import { ro } from "date-fns/locale";
import { iconDelete, iconEdit } from "../../../../assets/images/icons";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { route } from "../../../../shared/constants/AllRoutes";
import { showDeleteConfirmation } from "../../../../shared/utils";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
export const columns = (
  handleDelete,
  navigate,
  editPermission,
  deletePermission
) => [
  {
    key: "materialName",
    label: "wasteCategory",
    render: (params) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <ProfilePic
          size={30}
          userId={params.materialTypeId}
          image={params.imagePath}
          name={params.materialName}
          isChange={false}
        />
        <span>{params.materialName}</span>
      </div>
    ),
  },
  {
    key: "status",
    label: "status",
  },
  {
    key: "updated",
    label: "updated",
    render: (params) => <span>{formatDate(params.updated)}</span>,
  },
  {
    key: "actions",
    label: "action",
    render: (params) => {
      return (
        <>
          <div style={{ display: "flex", gap: "5px" }}>
            {editPermission && (
              <button
                style={{ border: "none", margin: "0px" }}
                onClick={() =>
                  navigate(
                    route.appContentManagement.MaterialAndServices.Add
                      .MaterialType,
                    {
                      state: {
                        matirialData: params,
                      },
                    }
                  )
                }
                className="action-btn"
              >
                <img src={iconEdit} />
              </button>
            )}
            {deletePermission && (
              <button
                className="action-btn"
                style={{ border: "none", margin: "0px" }}
                onClick={() => {
                  showDeleteConfirmation(() =>
                    handleDelete(params.materialTypeId)
                  );
                }}
              >
                <img src={iconDelete} />
              </button>
            )}
          </div>
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
