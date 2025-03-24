import { useNavigate } from "react-router-dom";
import CommonHardwareShopList from "../Component/CommonHardwareShopList";
import { useSelector } from "react-redux";
import { route } from "../../../shared/constants/AllRoutes";
import { orderHistoryData, OrderHistoryHeaders } from "./config";

const OrderHistory = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  return (
    <CommonHardwareShopList
      title="List of Customer Name"
      translations={translations}
      navigate={navigate}
      route={route.hardwareShopManagement.OrderHistory.List}
      Headers={OrderHistoryHeaders(navigate)}
      data={orderHistoryData}
      isDateAndtime={true}
    />
  );
};

export default OrderHistory;
