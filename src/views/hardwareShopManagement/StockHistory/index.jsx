import { useNavigate } from "react-router-dom";
import CommonHardwareShopList from "../Component/CommonHardwareShopList";
import { useSelector } from "react-redux";
import { route } from "../../../shared/constants/AllRoutes";
import { stockHistoryData, StockHistoryHeaders } from "./config";

const StockHistory = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  return (
    <CommonHardwareShopList
      title="List of Customer Name"
      translations={translations}
      navigate={navigate}
      route={route.hardwareShopManagement.ProductListing.Add}
      Headers={StockHistoryHeaders(navigate)}
      data={stockHistoryData}
      isDateAndtime={true}
    />
  );
};

export default StockHistory;
