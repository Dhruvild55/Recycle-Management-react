import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../../../shared/components/Buttoncomponent";
import { route } from "../../../../shared/constants/AllRoutes";

const AppContentManagementTopSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getSelectedSection = () => {
    if (
      location.pathname === route.appContentManagement.MaterialAndServices.List
    )
      return "material-service-management";
    if (location.pathname === route.appContentManagement.BannerManagement.List)
      return "banner-management";
  };

  const selectedSection = getSelectedSection();
  return (
    <div className="common-tab-section">
      <ButtonComponent
        label="Material & Services Management"
        onClick={() =>
          navigate(route.appContentManagement.MaterialAndServices.List)
        }
        className={`btn${
          selectedSection === "material-service-management" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Banner Management"
        onClick={() =>
          navigate(route.appContentManagement.BannerManagement.List)
        }
        className={`btn${
          selectedSection === "banner-management" ? " selected" : ""
        }`}
      />
    </div>
  );
};
export default AppContentManagementTopSection;
