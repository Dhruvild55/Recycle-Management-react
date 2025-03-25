import { iconEye } from "../../../assets/images/icons";
import ChipComponent from "../../../shared/components/ChipComponent";
import ProfilePic from "../../../shared/components/ProfilePic";

export const StockHistoryHeaders = (navigate) => [
  { key: "dateAndtime", label: "dateAndTime" },
  {
    key: "name",
    label: "name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic />
          <span>{row.name}</span>
        </div>
      );
    },
  },
  { key: "quantity", label: "quantity" },
  {
    key: "stock_activity",
    label: "stock_activity",
    render: (row) => {
      return (
        <div>
          <ChipComponent
            label={
              row.stock_activity === "Add"
                ? `+ ${row.stock_activity}`
                : `- ${row.stock_activity}`
            }
            color={row.stock_activity === "Add" ? "green" : "yellow"}
          />
        </div>
      );
    },
  },
  { key: "total_stock", label: "total_stock" },
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
