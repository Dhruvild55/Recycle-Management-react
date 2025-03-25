import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../../../shared/components/Buttoncomponent";
import { route } from "../../../../shared/constants/AllRoutes";

const TopSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getSelectedSection = () => {
    if (location.pathname === route.hardwareShopManagement.ProductListing.List)
      return "ProductListing";
    if (location.pathname === route.hardwareShopManagement.OrderHistory.List)
      return "OrderHistory";
    if (location.pathname === route.hardwareShopManagement.StockHistory.List)
      return "StockHistory";
  };
  const selectedSection = getSelectedSection();
  return (
    <div className="common-tab-section">
      <ButtonComponent
        label="Product Listing"
        onClick={() =>
          navigate(route.hardwareShopManagement.ProductListing.List)
        }
        className={`btn${
          selectedSection === "ProductListing" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Order History"
        onClick={() => navigate(route.hardwareShopManagement.OrderHistory.List)}
        className={`btn${
          selectedSection === "OrderHistory" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Stock History"
        onClick={() => navigate(route.hardwareShopManagement.StockHistory.List)}
        className={`btn${
          selectedSection === "StockHistory" ? " selected" : ""
        }`}
      />
    </div>
  );
};

export default TopSection;
