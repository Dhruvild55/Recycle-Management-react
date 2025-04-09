import { useSelector } from "react-redux";
import { ProductListHeader } from "./config";
import { route } from "../../../shared/constants/AllRoutes";
import { useNavigate } from "react-router-dom";
import CommonHardwareShopList from "../Component/CommonHardwareShopList";
import { getProductList } from "../../../query/HardwareShopManagement/getProductList/getProductList.query";

const ProductListing = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);

  return (
    <CommonHardwareShopList
      title="List of Product Name"
      translations={translations}
      navigate={navigate}
      route={route.hardwareShopManagement.ProductListing.Add}
      tableHeaders={ProductListHeader}
      isDateAndtime={false}
      getQueryFn={getProductList}
      getQueryKey="ProductListData"
      optionsData={[
        { value: "", label: "All" },
        { value: 1, label: "Enable" },
        { value: 0, label: "Disable" },
      ]}
    />
  );
};

export default ProductListing;
