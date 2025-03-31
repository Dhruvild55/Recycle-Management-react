import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../../../../../shared/components/Buttoncomponent";
import { route } from "../../../../../../shared/constants/AllRoutes";

const TopSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedSection = () => {
    if (
      location.pathname ===
      route.appContentManagement.MaterialAndServices.Add.MaterialType
    )
      return "materialType";
    if (
      location.pathname ===
      route.appContentManagement.MaterialAndServices.Add.CollectorGuidline
    )
      return "collectiorGuideline";
    if (
      location.pathname ===
      route.appContentManagement.MaterialAndServices.Add.RecyclerGuideline
    )
      return "recyclerGuideline";
    if (
      location.pathname ===
      route.appContentManagement.MaterialAndServices.Add.CollectionIncentive
    )
      return "collectionIncentive";
    if (
      location.pathname ===
      route.appContentManagement.MaterialAndServices.Add.TermsAndCondition
    )
      return "termsAndCondition";
  };

  const selectedSection = getSelectedSection();
  return (
    <div className="common-tab-section">
      <ButtonComponent
        label="Material Type"
        onClick={() =>
          navigate(
            route.appContentManagement.MaterialAndServices.Add.MaterialType
          )
        }
        className={`btn${
          selectedSection === "materialType" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Collector Guideline"
        onClick={() =>
          navigate(
            route.appContentManagement.MaterialAndServices.Add.CollectorGuidline
          )
        }
        className={`btn${
          selectedSection === "collectiorGuideline" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Recycler Guideline"
        onClick={() =>
          navigate(
            route.appContentManagement.MaterialAndServices.Add.RecyclerGuideline
          )
        }
        className={`btn${
          selectedSection === "recyclerGuideline" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Collection Incentive"
        onClick={() =>
          navigate(
            route.appContentManagement.MaterialAndServices.Add
              .CollectionIncentive
          )
        }
        className={`btn${
          selectedSection === "collectionIncentive" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Terms & Conditon"
        onClick={() =>
          navigate(
            route.appContentManagement.MaterialAndServices.Add.TermsAndCondition
          )
        }
        className={`btn${
          selectedSection === "termsAndCondition" ? " selected" : ""
        }`}
      />
    </div>
  );
};

export default TopSection;
