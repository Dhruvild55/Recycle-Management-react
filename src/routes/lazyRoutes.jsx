import { lazy } from "react";

const ADMIN_Path = "../views/User/Admin";
const RECYCLER_PATH = "../views/User/Recycler";
const COLLECTOR_PATH = "../views/User/Collecter";

//* Public Routes Files
const AuthRoutes = {
  Login: () => lazy(() => import("../views/auth/login")),
};

// * Private Route
const Dashboard = {
  Dashboard: () => lazy(() => import("../views/dashboard")),
};

const UserManagement = {
  Admin: {
    List: () => lazy(() => import(`${ADMIN_Path}/AdminList`)),
    Add: () => lazy(() => import(`${ADMIN_Path}/Admin-add`)),
  },
  Recycler: {
    List: () => lazy(() => import(`${RECYCLER_PATH}/RecyclerList`)),
    Details: () => lazy(() => import(`${RECYCLER_PATH}/Information`)),
    History: () => lazy(() => import(`${RECYCLER_PATH}/History`)),
    Rewards: () => lazy(() => import(`${RECYCLER_PATH}/Rewards`)),
    Hardware: () => lazy(() => import(`${RECYCLER_PATH}/Hardware`)),
    ViewHistory: () =>
      lazy(() =>
        import(`${RECYCLER_PATH}/History/PreviousItems/viewPreviousItems`)
      ),
  },
  Collector: {
    List: () => lazy(() => import(`${COLLECTOR_PATH}/CollectorList`)),
    Details: () => lazy(() => import(`${COLLECTOR_PATH}/Information`)),
    PickupHistory: () => lazy(() => import(`${COLLECTOR_PATH}/PickupHistory`)),
    Clearance: () => lazy(() => import(`${COLLECTOR_PATH}/Clearance`)),
  },
};

export { AuthRoutes, Dashboard, UserManagement };
