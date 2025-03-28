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
    if (location.pathname === route.rewardsManagement.FatPointAndPointDeno.View)
      return "fatAndPointDeno";
    if (location.pathname === route.rewardsManagement.CashReward.List)
      return "cashrewards";
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
      <ButtonComponent
        label="Setting for Fiat and Points Deno"
        onClick={() =>
          navigate(route.rewardsManagement.FatPointAndPointDeno.View)
        }
        className={`btn${
          selectedSection === "fatAndPointDeno" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Cash Reward"
        onClick={() => navigate(route.rewardsManagement.CashReward.List)}
        className={`btn${selectedSection === "cashrewards" ? " selected" : ""}`}
      />
    </div>
  );
};

export default RewardManagementTopSection;
