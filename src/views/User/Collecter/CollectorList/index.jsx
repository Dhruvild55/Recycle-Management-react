import { getCollectorList } from "../../../../query/users/getCollectorList/getCollector.query";
import UserList from "../../Component/UserList";
import { collecterColumns } from "./Configue";

const CollectorList = () => {
  return (
    <UserList
      title="List of Collector"
      queryKey="collectorList"
      fetchFunction={getCollectorList}
      tableHeaders={collecterColumns}
      roleOptions={["B2C Collector", "B2B Collector", "All"]}
    />
  );
};

export default CollectorList;
