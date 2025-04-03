import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../../../shared/components/Buttoncomponent";
import { route } from "../../../../shared/constants/AllRoutes";

const CollectionManagementTopSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedSection = () => {
    if (
      location.pathname === route.collectionManagement.RecyclerCollection.List
    )
      return "recycler-collection";
    if (
      location.pathname === route.collectionManagement.CollectorCollection.List
    )
      return "collector-collection";
    return "recycler-collection";
  };

  const selectedSection = getSelectedSection();
  return (
    <div className="common-tab-section">
      <ButtonComponent
        label="Recyler Collection"
        onClick={() =>
          navigate(route.collectionManagement.RecyclerCollection.List)
        }
        className={`btn${
          selectedSection === "recycler-collection" ? " selected" : ""
        }`}
      />
      <ButtonComponent
        label="Collector Collection"
        onClick={() =>
          navigate(route.collectionManagement.CollectorCollection.List)
        }
        className={`btn${
          selectedSection === "collector-collection" ? " selected" : ""
        }`}
      />
    </div>
  );
};

export default CollectionManagementTopSection;
