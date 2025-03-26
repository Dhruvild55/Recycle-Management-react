import { getAdminList } from "../../../../query/users/getAdminList/getAdmin.query";
import { route } from "../../../../shared/constants/AllRoutes";
import UserList from "../../Component/UserList";

import { headers } from "./confige";

const AdminList = () => {
  return (
    <UserList
      title="List of Admin"
      queryKey="adminList"
      fetchFunction={getAdminList}
      tableHeaders={headers}
      addButton={{ route: route.userManagement.Admin.Add, label: "Add Admin" }}
      roleOptions={["Admin", "SuperAdmin", "All"]}
    />
  );
};

export default AdminList;
