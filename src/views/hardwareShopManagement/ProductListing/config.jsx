/* eslint-disable react-refresh/only-export-components */
import {
  iconCoin,
  iconDelete,
  iconDoller,
  iconEdit,
  iconEye,
} from "../../../assets/images/icons";
import BinIcon from "../../../assets/images/icons/BinIcon";
import ProfilePic from "../../../shared/components/ProfilePic";
import { route } from "../../../shared/constants/AllRoutes";

export const ProductListHeader = (navigate) => [
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
  { key: "id", label: "id" },
  {
    key: "category",
    label: "category",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <BinIcon color="#475467" />
          <span>{row.category}</span>
        </div>
      );
    },
  },
  {
    key: "price",
    label: "price",
    render: (row) => {
      return (
        <>
          <div className="d-flex align-items-center gap-3">
            <img src={iconDoller} />
            <span>{row.price}</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <img src={iconCoin} />
            <span>500 pts</span>
          </div>
        </>
      );
    },
  },
  {
    key: "current_stock",
    label: "current_stock",
  },
  { key: "status", label: "status" },
  {
    key: "action",
    label: "action",
    render: (row) => {
      return (
        <div>
          <button className="action-btn">
            <img src={iconEdit} />
          </button>
          <button
            className="action-btn"
            onClick={() =>
              navigate(
                route.hardwareShopManagement.ProductListing.Details(row.id)
              )
            }
          >
            <img src={iconEye} />
          </button>
          <button className="action-btn">
            <img src={iconDelete} />
          </button>
        </div>
      );
    },
  },
];

export const ProductListData = [
  {
    product_name: "Jerrycan",
    id: "00389V",
    category: "Used Cooking Oil",
    price: "RM 4.05",
    current_stock: "100",
    status: "Disable",
  },
];
