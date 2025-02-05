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

export const SUPPORTED_LANGUAGES = [
  { identifire: "en", language: "English" },
  { identifire: "zh", language: "chinese" },
  { identifire: "ms", language: "Malaysian" },
];
