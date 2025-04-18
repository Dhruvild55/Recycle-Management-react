/* eslint-disable react-refresh/only-export-components */
import { Bounce, Flip, toast } from "react-toastify";

export const ReactToastify = (msg, type, customId) => {
  switch (type) {
    case "error":
      toast.error(msg, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
        transition: Flip,
        toastId: customId,
      });
      break;
    case "success":
      toast.success(msg, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
        transition: Bounce,
        toastId: customId,
      });
      break;
    default:
      break;
  }
};

export const showDeleteConfirmation = (onConfirm) => {
  console.log("Confirmation Toast Triggered ✅"); // <-- add this
  toast(
    ({ closeToast }) => (
      <div>
        <p>Are you sure you want to delete this data?</p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "#37cb74",
              color: "#fff",
              padding: "5px 10px",
              border: "1px solid #37cb74",
              borderRadius: "8px",
            }}
            onClick={() => {
              onConfirm(); // Call the delete function
              closeToast();
            }}
          >
            Confirm
          </button>
          <button
            style={{
              backgroundColor: "#e96165",
              color: "#fff",
              padding: "5px 10px",
              border: "1px solid #e96165",
              borderRadius: "8px",
            }}
            onClick={closeToast}
          >
            Cancel
          </button>
        </div>
      </div>
    ),
    {
      position: "top-right",
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      closeButton: false,
    }
  );
};

export const SUPPORTED_LANGUAGES = [
  { identifire: "en", language: "English" },
  { identifire: "zh", language: "chinese" },
  { identifire: "ms", language: "Malaysian" },
];

export const hasViewPermission = (permissionkey, userPermissions) => {
  if (userPermissions !== "permissions") {
    const found = userPermissions?.find(
      (perm) => perm.pageName === permissionkey
    );
    return found?.isView;
  }
};

// export const hasEditPermission = (permissionkey, userPermissions) => {
//   if (userPermissions !== "permissions") {
//     const found = userPermissions?.find(
//       (perm) => perm.pageName === permissionkey
//     );
//     return found?.isEdit;
//   }
// };

export const checkPermission = (
  permissionKey,
  userPermissions,
  type = "isView"
) => {
  const found = userPermissions?.find(
    (perm) => perm.pageName === permissionKey
  );
  return found?.[type] || false;
};
