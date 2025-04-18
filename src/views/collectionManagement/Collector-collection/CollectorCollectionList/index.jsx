import CommonListSection from "../../Component/CommonListSection";
import { getCollectorCollection } from "../../../../query/CollectionManagement/Collector/getCollectorCollection/getCollectorCollection.query";
import { collectorCollectionHeaders } from "../../confige";
import usePagePermissions from "../../../../shared/hooks/usePagePermission/usePagePermission";
import { useEffect } from "react";

const CollectorCollectionList = () => {
  const { canCreate, canDelete, canEdit } = usePagePermissions(
    "Collection Management"
  );
  useEffect(() => {
    document.title = "Collection Management | Recycler Management";
  }, []);
  return (
    <CommonListSection
      title="Collector List"
      queryKey="CollectorCollectionList"
      fetchfunction={getCollectorCollection}
      tableHeaders={collectorCollectionHeaders}
      role="Collector"
      editPermission={canEdit}
      deletePermission={canDelete}
    />
  );
};

export default CollectorCollectionList;
