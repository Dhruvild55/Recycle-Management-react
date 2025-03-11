import { getRecyclerList } from "../../../../query/users/getRecyclerList/getRecycler.query";
import UserList from "../../Component/UserList";
import { recyclerColumns } from "./configue";

const RecyclerList = () => {
  return (
    <UserList
      title="List of Recycler"
      queryKey="recyclerList"
      fetchFunction={getRecyclerList}
      tableHeaders={recyclerColumns}
      roleOptions={["B2C Recycler", "B2B Recycler", "All"]}
    />
  );
};

export default RecyclerList;
