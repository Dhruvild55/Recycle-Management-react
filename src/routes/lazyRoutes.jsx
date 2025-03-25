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
    Edit: lazy(() => import(`../views/User/Admin/Admin-edit`)),
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
const CollectionManagement = {
  Recycler: {
    List: lazy(() =>
      import(
        `../views/collectionManagement/Recycler-collection/RecyclerCollectionList`
      )
    ),
    Details: lazy(() =>
      import(
        `../views/collectionManagement/Recycler-collection/RecyclerCollectionInfo`
      )
    ),
  },
  Collector: {
    List: lazy(() =>
      import(
        `../views/collectionManagement/Collector-collection/CollectorCollectionList`
      )
    ),
    Details: lazy(() =>
      import(
        "../views/collectionManagement/Collector-collection/CollectorCollectionInfo"
      )
    ),
  },
};

const AppContentManagement = {
  MaterialAndeServices: {
    List: lazy(() =>
      import(
        "../views/appContentManagement/MaterialAndServices/MaterialAndServiceList"
      )
    ),
    Add: lazy(() =>
      import("../views/appContentManagement/MaterialAndServices/addNewWaste")
    ),
  },
  BannerManagement: {
    List: lazy(() =>
      import("../views/appContentManagement/BannerManagement/BannerList")
    ),
    Add: lazy(() =>
      import("../views/appContentManagement/BannerManagement/BannerAdd")
    ),
  },
};

const SponsorManagement = {
  List: lazy(() => import("../views/sponsorManagement/SponsorManagementList")),
  View: {
    SponsorInfo: lazy(() =>
      import(
        "../views/sponsorManagement/SponsorManagementView/SponsorInformation"
      )
    ),
    PartnerCatelogue: {
      List: lazy(() =>
        import(
          "../views/sponsorManagement/SponsorManagementView/PartnerCatelogue/PartnerCatelogueList"
        )
      ),
      Add: lazy(() =>
        import(
          "../views/sponsorManagement/SponsorManagementView/PartnerCatelogue/PartnerCatelogueAdd"
        )
      ),
    },
    RedimptionHistory: lazy(() =>
      import(
        "../views/sponsorManagement/SponsorManagementView/RedimptionHistory"
      )
    ),
  },
};

const PointsTransactionManagement = {
  Earning: {
    List: lazy(() =>
      import("../views/pointsTransactionManagement/EarningSection")
    ),
  },
  Usage: {
    List: lazy(() => import("../views/pointsTransactionManagement/usage")),
  },
};

const RewardsManagement = {
  ProductManagement: {
    List: lazy(() => import("../views/rewardsManagement")),
    Add: lazy(() =>
      import("../views/rewardsManagement/ProductManagement/AddRewards")
    ),
    View: lazy(() =>
      import("../views/rewardsManagement/ProductManagement/ViewRewards")
    ),
  },
};

const HardwareShopManagement = {
  ProductListing: {
    List: lazy(() => import("../views/hardwareShopManagement/ProductListing")),
    Add: lazy(() =>
      import("../views/hardwareShopManagement/ProductListing/Add")
    ),
    Details: lazy(() =>
      import("../views/hardwareShopManagement/ProductListing/Details")
    ),
  },
  OrderHistory: {
    List: lazy(() => import("../views/hardwareShopManagement/OrderHistory")),
  },
};
export {
  AuthRoutes,
  Dashboard,
  UserManagement,
  CollectionManagement,
  AppContentManagement,
  SponsorManagement,
  PointsTransactionManagement,
  HardwareShopManagement,
  RewardsManagement,
};
