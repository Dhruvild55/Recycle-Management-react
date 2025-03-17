import { lazy } from "react";

//* Public Routes Files
const AuthRoutes = {
  Login: lazy(() => import("../views/auth/login")),
};

// * Private Route
const Dashboard = {
  Dashboard: lazy(() => import("../views/dashboard")),
};

const UserManagement = {
  Admin: {
    List: lazy(() => import(`../views/User/Admin/AdminList`)),
    Add: lazy(() => import(`../views/User/Admin/Admin-add`)),
  },
  Recycler: {
    List: lazy(() => import(`../views/User/Recycler/RecyclerList`)),
    Details: lazy(() => import(`../views/User/Recycler/Information`)),
    History: lazy(() => import(`../views/User/Recycler/History`)),
    Rewards: lazy(() => import(`../views/User/Recycler/Rewards`)),
    Hardware: lazy(() => import(`../views/User/Recycler/Hardware`)),
    ViewHistory: lazy(() =>
      import(`../views/User/Recycler/History/PreviousItems/viewPreviousItems`)
    ),
  },
  Collector: {
    List: lazy(() => import(`../views/User/Collecter/CollectorList`)),
    Details: lazy(() => import(`../views/User/Collecter/Information`)),
    PickupHistory: lazy(() => import(`../views/User/Collecter/PickupHistory`)),
    Clearance: lazy(() => import(`../views/User/Collecter/Clearance`)),
  },
};

export { AuthRoutes, Dashboard, UserManagement };
