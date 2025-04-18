import { useSelector } from "react-redux";
import { checkPermission } from "../utils";

const withPermission = (WrappedComponent, permissionKey, action = "isView") => {
  const ComponentWithPermission = (props) => {
    const userPermissions = useSelector(
      (state) => state.parmissions.permission
    );
    const hasAccess = checkPermission(permissionKey, userPermissions, action);

    if (!hasAccess) {
      return <div>You are not authorized to access this page.</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithPermission;
};

export default withPermission;
