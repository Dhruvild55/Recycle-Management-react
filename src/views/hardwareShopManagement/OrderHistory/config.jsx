import { iconEye } from "../../../assets/images/icons";
import ChipComponent from "../../../shared/components/ChipComponent";
import ProfilePic from "../../../shared/components/ProfilePic";
import { route } from "../../../shared/constants/AllRoutes";
import { formatDate } from "../../../shared/constants/ValidationRules";

export const OrderHistoryHeaders = (navigate) => [
  { key: "orderId", label: "order_id" },
  {
    key: "productName",
    label: "product_name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic image={row.productImage} />
          <span>{row.productName}</span>
        </div>
      );
    },
  },
  {
    key: "dateTime",
    label: "dateAndTime",
    render: (row) => {
      return <span>{formatDate(row.dateTime)}</span>;
    },
  },
  {
    key: "customerName",
    label: "customer_name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic image={row.customerImg} />
          <span>{row.customerName}</span>
        </div>
      );
    },
  },
  {
    key: "quantity",
    label: "quantity",
  },
  {
    key: "orderStatus",
    label: "order_status",
    render: (row) => {
      return (
        <ChipComponent
          label={row.orderStatus}
          color={
            row.orderStatus === "Completed"
              ? "green"
              : row.orderStatus === "ReadyToShip"
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
            navigate(
              route.hardwareShopManagement.OrderHistory.Details(row.orderId)
            )
          }
        >
          <img src={iconEye} />
        </button>
      );
    },
  },
];
