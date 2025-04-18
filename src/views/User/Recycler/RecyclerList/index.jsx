import { getRecyclerList } from "../../../../query/users/Recycler/getRecyclerList/getRecycler.query";
import usePagePermissions from "../../../../shared/hooks/usePagePermission/usePagePermission";
import UserList from "../../Component/UserList";
import { recyclerColumns } from "./configue";

const RecyclerList = () => {
  const { canCreate, canDelete, canEdit } =
    usePagePermissions("User Management");
  return (
    <UserList
      title="List of Recycler"
      queryKey="recyclerList"
      fetchFunction={getRecyclerList}
      tableHeaders={recyclerColumns}
      roleOptions={["B2C Recycler", "B2B Recycler", "All"]}
      editPermission={canEdit}
      deletePermission={canDelete}
      createPermission={canCreate}
    />
  );
};

export default RecyclerList;
