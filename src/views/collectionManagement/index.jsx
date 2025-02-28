import { Suspense, useState } from "react";
import ButtonComponent from "../../shared/components/Buttoncomponent";
import RecyclerCollectionList from "./Recycler-collection/RecyclerCollectionList";
import CollectorCollectionList from "./Collector-collection/CollectorCollectionList";
import useMediaQuery from "../../shared/hooks/useMediaQuery";

const CollectionManagement = () => {
  const [selectedRole, setSelectedRole] = useState("recyler-collection");
  const isMobile = useMediaQuery("(max-width: 425px)");

  const renderSelectedComponent = () => {
    console.log(selectedRole);
    switch (selectedRole) {
      case "recyler-collection":
        return <RecyclerCollectionList />;
      case "collector-collection":
        return <CollectorCollectionList />;
      default:
        return null;
    }
  };
  return (
    <div className="collection-management-section">
      <div className="common-main-section">
        <div className="common-top-section">
          {isMobile ? (
            <select
              className="dropdown"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="recyler-collection">Recyler Collection</option>
              <option value="collector-collection">Collector Collection</option>
            </select>
          ) : (
            <>
              <ButtonComponent
                label="Recyler Collection"
                onClick={() => setSelectedRole("recyler-collection")}
                className={`btn${
                  selectedRole === "recyler-collection" ? " selected" : ""
                }`}
              />
              <ButtonComponent
                label="Collector Collection"
                onClick={() => setSelectedRole("collector-collection")}
                className={`btn${
                  selectedRole === "collector-collection" ? " selected" : ""
                }`}
              />
            </>
          )}
        </div>
        <div className="userManagement-content-section">
          <Suspense fallback={<div>Loading...</div>}>
            {renderSelectedComponent()}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default CollectionManagement;
