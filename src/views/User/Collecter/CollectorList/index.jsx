import { getCollectorList } from "../../../../query/users/getCollectorList/getCollector.query";
import usePagePermissions from "../../../../shared/hooks/usePagePermission/usePagePermission";
import UserList from "../../Component/UserList";
import { collecterColumns } from "./Configue";

const CollectorList = () => {
  const { canCreate, canDelete, canEdit } =
    usePagePermissions("User Management");
  return (
    <UserList
      title="List of Collector"
      queryKey="collectorList"
      fetchFunction={getCollectorList}
      tableHeaders={collecterColumns}
      roleOptions={["B2C Collector", "B2B Collector", "All"]}
      editPermission={canEdit}
      deletePermission={canDelete}
      createPermission={canCreate}
    />
  );
};

export default CollectorList;
