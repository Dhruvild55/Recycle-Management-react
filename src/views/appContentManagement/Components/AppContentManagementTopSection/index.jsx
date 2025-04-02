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
    if (location.pathname === route.appContentManagement.EventManagement.List)
      return "event-management";
    if (
      location.pathname ===
      route.appContentManagement.BaseCollectorGuideline.List
    )
      return "baseCollectorGuideline";
    if (
      location.pathname === route.appContentManagement.BaseCollectorTerms.List
    )
      return "baseCollectorTerms";
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
      <ButtonComponent
        label="Event Management"
        onClick={() =>
          navigate(route.appContentManagement.EventManagement.List)
        }
        className={`btn${
          selectedSection === "event-management" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Base Collector Guideline"
        onClick={() =>
          navigate(route.appContentManagement.BaseCollectorGuideline.List)
        }
        className={`btn${
          selectedSection === "baseCollectorGuideline" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Base Collector T&C"
        onClick={() =>
          navigate(route.appContentManagement.BaseCollectorTerms.List)
        }
        className={`btn${
          selectedSection === "baseCollectorTerms" ? " selected" : ""
        }`}
      />
    </div>
  );
};
export default AppContentManagementTopSection;
