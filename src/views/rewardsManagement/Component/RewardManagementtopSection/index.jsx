import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../../../shared/components/Buttoncomponent";
import { route } from "../../../../shared/constants/AllRoutes";

const RewardManagementTopSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getSelectedSection = () => {
    if (location.pathname === route.rewardsManagement.ProductManagement.List)
      return "productManagement";
    if (location.pathname === route.rewardsManagement.RewardsTransaction.List)
      return "rewardsTransaction";
  };
  const selectedSection = getSelectedSection();
  return (
    <div className="common-tab-section">
      <ButtonComponent
        label="Product Management"
        onClick={() => navigate(route.rewardsManagement.ProductManagement.List)}
        className={`btn${
          selectedSection === "productManagement" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Rewards Transaction"
        onClick={() =>
          navigate(route.rewardsManagement.RewardsTransaction.List)
        }
        className={`btn${
          selectedSection === "rewardsTransaction" ? " selected" : ""
        }`}
      />
    </div>
  );
};

export default RewardManagementTopSection;
