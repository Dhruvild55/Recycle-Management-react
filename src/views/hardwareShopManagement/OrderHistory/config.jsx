import { iconEye } from "../../../assets/images/icons";
import ChipComponent from "../../../shared/components/ChipComponent";
import ProfilePic from "../../../shared/components/ProfilePic";
import { route } from "../../../shared/constants/AllRoutes";

export const OrderHistoryHeaders = (navigate) => [
  { key: "order_id", label: "order_id" },
  {
    key: "product_name",
    label: "product_name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic />
          <span>{row.product_name}</span>
        </div>
      );
    },
  },
  {
    key: "dateAndTime",
    label: "dateAndTime",
  },
  {
    key: "customer_name",
    label: "customer_name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic />
          <span>{row.customer_name}</span>
        </div>
      );
    },
  },
  {
    key: "quantity",
    label: "quantity",
  },
  {
    key: "order_status",
    label: "order_status",
    render: (row) => {
      return (
        <ChipComponent
          label={row.order_status}
          color={
            row.order_status === "Completed"
              ? "green"
              : row.order_status === "Ready to Ship"
              ? "yellow"
              : "blue"
          }
        />
      );
    },
  },
  {
    key: "action",
    label: "action",
    render: (row) => {
      return (
        <button
          className="action-btn"
          onClick={() =>
            navigate(route.hardwareShopManagement.OrderHistory.Details(row.id))
          }
        >
          <img src={iconEye} />
        </button>
      );
    },
  },
];

export const orderHistoryData = [
  {
    order_id: "GTH 00389V",
    product_name: "Jerrycan",
    dateAndTime: "Mon., 13/01/2025",
    customer_name: "Saleha Ismail",
    quantity: "1",
    order_status: "Completed",
  },
  {
    order_id: "GTH 00389V",
    product_name: "Jerrycan",
    dateAndTime: "Mon., 13/01/2025",
    customer_name: "Saleha Ismail",
    quantity: "1",
    order_status: "Ready to Ship",
  },
];
