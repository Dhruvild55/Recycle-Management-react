import { toast } from "react-toastify";

const showDeleteConfirmation = (onConfirm) => {
  toast.info(
    ({ closeToast }) => (
      <div>
        <p>Are you sure you want to delete this user?</p>
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
              backgroundColor: "#dc3545",
              color: "#fff",
              padding: "5px 10px",
            }}
            onClick={() => {
              onConfirm(); // Perform delete
              toast.success("User deleted successfully.");
              closeToast();
            }}
          >
            Confirm
          </button>
          <button
            style={{
              backgroundColor: "#6c757d",
              color: "#fff",
              padding: "5px 10px",
            }}
            onClick={closeToast}
          >
            Cancel
          </button>
        </div>
      </div>
    ),
    {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      closeButton: false,
    }
  );
};
