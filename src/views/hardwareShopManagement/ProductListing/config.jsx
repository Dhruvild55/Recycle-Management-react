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

export const ProductListHeader = (navigate, deleteProductMutation) => [
  {
    key: "productName",
    label: "product_name",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <ProfilePic image={row.images} />
          <span>{row.productName}</span>
        </div>
      );
    },
  },
  { key: "id", label: "id" },
  {
    key: "productType",
    label: "category",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <BinIcon color="#475467" />
          <span>{row.productType}</span>
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
            <img src={iconDoller} style={{ height: "13px", width: "13px" }} />
            <span>RM {Number(row.priceInFiat).toFixed(2)}</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <img src={iconCoin} style={{ height: "13px", width: "13px" }} />
            <span>{row.priceInPoints} pts</span>
          </div>
        </>
      );
    },
  },
  {
    key: "currentStock",
    label: "current_stock",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <span>{row.currentStock}</span>
        </div>
      );
    },
  },
  {
    key: "status",
    label: "status",
    render: (row) => {
      return (
        <div className="d-flex align-items-center gap-2">
          <span>{row.status ? "Enable" : "Disable"}</span>
        </div>
      );
    },
  },
  {
    key: "action",
    label: "action",
    render: (row) => {
      return (
        <div>
          <button
            className="action-btn"
            onClick={() =>
              navigate(
                route.hardwareShopManagement.ProductListing.Details(row.id),
                { state: { isEditMode: true } }
              )
            }
          >
            <img src={iconEdit} />
          </button>
          <button
            className="action-btn"
            onClick={() =>
              navigate(
                route.hardwareShopManagement.ProductListing.Details(row.id),
                { state: { isEditMode: false } }
              )
            }
          >
            <img src={iconEye} />
          </button>

          <button className="action-btn">
            <img
              src={iconDelete}
              onClick={() => deleteProductMutation(row.id)}
            />
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
