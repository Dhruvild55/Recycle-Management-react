import { useSelector } from "react-redux";
import { checkPermission } from "../../utils";

const usePagePermissions = (permissionKey) => {
  const userPermissions = useSelector((state) => state.parmissions.permission);

  return {
    canView: checkPermission(permissionKey, userPermissions, "isView"),
    canEdit: checkPermission(permissionKey, userPermissions, "isEdit"),
    canCreate: checkPermission(permissionKey, userPermissions, "isCreate"),
    canDelete: checkPermission(permissionKey, userPermissions, "isDelete"),
  };
};

export default usePagePermissions;
