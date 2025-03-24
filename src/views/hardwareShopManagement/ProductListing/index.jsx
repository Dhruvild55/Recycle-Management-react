import { useSelector } from "react-redux";
import { ProductListData, ProductListHeader } from "./config";
import { route } from "../../../shared/constants/AllRoutes";
import { useNavigate } from "react-router-dom";
import CommonHardwareShopList from "../Component/CommonHardwareShopList";

const ProductListing = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  return (
    <CommonHardwareShopList
      title="List of Product Name"
      translations={translations}
      navigate={navigate}
      route={route.hardwareShopManagement.ProductListing.Add}
      Headers={ProductListHeader(navigate)}
      data={ProductListData}
      isDateAndtime={false}
    />
  );
};

export default ProductListing;
