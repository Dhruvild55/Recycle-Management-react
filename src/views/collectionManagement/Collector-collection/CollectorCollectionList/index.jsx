import CommonListSection from "../../Component/CommonListSection";
import { getCollectorCollection } from "../../../../query/CollectionManagement/Collector/getCollectorCollection/getCollectorCollection.query";
import { collectorCollectionHeaders } from "../../confige";

const CollectorCollectionList = () => {
  return (
    <CommonListSection
      title="Collector List"
      queryKey="CollectorCollectionList"
      fetchfunction={getCollectorCollection}
      tableHeaders={collectorCollectionHeaders}
      role="Collector"
    />
  );
};

export default CollectorCollectionList;
