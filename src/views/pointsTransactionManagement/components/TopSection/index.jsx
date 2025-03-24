import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../../../shared/components/Buttoncomponent";
import { route } from "../../../../shared/constants/AllRoutes";

const TopSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getSelectedSection = () => {
    if (location.pathname === route.pointsTransactionManagement.Earning.List)
      return "earning";
    if (location.pathname === route.pointsTransactionManagement.Usage.List)
      return "usage";
  };
  const selectedSection = getSelectedSection();
  return (
    <div className="common-tab-section">
      <ButtonComponent
        label="Earning"
        onClick={() => navigate(route.pointsTransactionManagement.Earning.List)}
        className={`btn${selectedSection === "earning" ? " selected" : ""}`}
      />
      <ButtonComponent
        label="Usage"
        onClick={() => navigate(route.pointsTransactionManagement.Usage.List)}
        className={`btn${selectedSection === "usage" ? " selected" : ""}`}
      />
    </div>
  );
};

export default TopSection;
