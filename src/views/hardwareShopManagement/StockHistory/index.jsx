import { useNavigate } from "react-router-dom";
import CommonHardwareShopList from "../Component/CommonHardwareShopList";
import { useSelector } from "react-redux";
import { route } from "../../../shared/constants/AllRoutes";
import { StockHistoryHeaders } from "./config";
import { getStockHistoryList } from "../../../query/HardwareShopManagement/getStockHistoryList/getStockHistoryList.query";

const StockHistory = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  return (
    <CommonHardwareShopList
      title="List of Customer Name"
      translations={translations}
      navigate={navigate}
      route={route.hardwareShopManagement.ProductListing.Add}
      tableHeaders={StockHistoryHeaders}
      isDateAndtime={true}
      getQueryFn={getStockHistoryList}
      getQueryKey="stockHistory"
      optionsData={[
        { value: "", label: "All" },
        { value: 1, label: "Add" },
        { value: 0, label: "Deduct" },
      ]}
    />
  );
};

export default StockHistory;
