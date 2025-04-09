import { useNavigate } from "react-router-dom";
import CommonHardwareShopList from "../Component/CommonHardwareShopList";
import { useSelector } from "react-redux";
import { route } from "../../../shared/constants/AllRoutes";
import { OrderHistoryHeaders } from "./config";
import { getOrderHistoryList } from "../../../query/HardwareShopManagement/getOrderHistoryList/getOrderHistoryList.query";

const OrderHistory = () => {
  const navigate = useNavigate();
  const translations = useSelector((state) => state.settings.translations);
  return (
    <CommonHardwareShopList
      title="List of Customer Name"
      translations={translations}
      navigate={navigate}
      route={route.hardwareShopManagement.OrderHistory.List}
      tableHeaders={OrderHistoryHeaders}
      isDateAndtime={true}
      getQueryFn={getOrderHistoryList}
      getQueryKey="orderHistoryList"
      optionsData={[
        { value: "", label: "All" },
        { value: 1, label: "Completed" },
        { value: 0, label: "Ready To Ship" },
        { value: 2, label: "Cancelled" },
      ]}
    />
  );
};

export default OrderHistory;
