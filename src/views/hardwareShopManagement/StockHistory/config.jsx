import { iconEye } from "../../../assets/images/icons";
import ChipComponent from "../../../shared/components/ChipComponent";
import ProfilePic from "../../../shared/components/ProfilePic";
import { formatDate } from "../../../shared/constants/ValidationRules";

export const StockHistoryHeaders = (navigate) => [
  {
    key: "dateTime",
    label: "dateAndTime",
    render: (row) => {
      return <span>{formatDate(row.dateTime)}</span>;
    },
  },
  {
    key: "userName",
    label: "name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic image={row.userImg} />
          <span>{row.userName}</span>
        </div>
      );
    },
  },
  { key: "quantity", label: "quantity" },
  {
    key: "stockActivity",
    label: "stock_activity",
    render: (row) => {
      return (
        <div>
          <ChipComponent
            label={
              row.stockActivity === "Add"
                ? `+ ${row.stockActivity}`
                : `- ${row.stockActivity}`
            }
            color={row.stockActivity === "Add" ? "green" : "yellow"}
          />
        </div>
      );
    },
  },
  { key: "totalStock", label: "total_stock" },
  {
    key: "action",
    label: "action",
    render: () => {
      return (
        <div>
          <button className="action-btn">
            <img src={iconEye} />
          </button>
        </div>
      );
    },
  },
];

export const stockHistoryData = [
  {
    dateAndtime: "Mon., 13/01/2025",
    name: "Saleha Ismail",
    quantity: "+5",
    stock_activity: "Add",
    total_stock: "105",
  },
  {
    dateAndtime: "Mon., 13/01/2025",
    name: "Saleha Ismail",
    quantity: "+5",
    stock_activity: "Deduct",
    total_stock: "105",
  },
];
