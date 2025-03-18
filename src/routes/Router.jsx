import { lazy } from "react";
import { route } from "../shared/constants/AllRoutes";
import {
  AppContentManagement,
  AuthRoutes,
  CollectionManagement,
  Dashboard,
  UserManagement,
} from "./lazyRoutes";

const PublicRoute = lazy(() => import("./PublicRoutes"));
const PrivateRoute = lazy(() => import("./PrivateRoutes"));

// ! User Management - Roles And Permission
const RolesList = lazy(() => import("../views/User/Admin And Roles/RolesList"));

const AdminPermissionEditPage = lazy(() =>
  import("../views/User/Admin And Roles/edit-admin-permission")
);

// // App Content Management
// const AppcontantManagementPage = lazy(() =>
//   import("../views/appContentManagement/")
// );
const AddWeastePage = lazy(() =>
  import("../views/appContentManagement/MaterialAndServices/addNewWaste")
);
const AddGuideLinePage = lazy(() =>
  import("../views/appContentManagement/addGuidelines")
);

const ViewCollectorCollectionPage = lazy(() =>
  import(
    "../views/collectionManagement/Collector-collection/CollectorCollectionInfo"
  )
);

//* Rewards Management
const RewardsManagementPage = lazy(() => import("../views/rewardsManagement"));
const AddRewardsPage = lazy(() =>
  import("../views/rewardsManagement/ProductManagement/AddRewards")
);
const ViewRewardsPage = lazy(() =>
  import("../views/rewardsManagement/ProductManagement/ViewRewards")
);

const ViewRewardsTransactionPage = lazy(() =>
  import("../views/rewardsManagement/RewardsTransaction/ViewRewardsTransaction")
);

const ViewfiatAndDenominationsPage = lazy(() =>
  import("../views/rewardsManagement/SettingFiatAndPoints")
);

const RewardsDetailsPage = lazy(() =>
  import("../views/rewardsManagement/CashReward/CashRewardsDetails")
);

//* collecterServiceManagement
const CollecterServiceManagementPage = lazy(() =>
  import("../views/CollectorServiceManagement/NewCollecterPermissionList")
);
const CollectorRequestDetailsPage = lazy(() =>
  import("../views/CollectorServiceManagement/CollectorRequestDetails")
);

const CampaignCreate = lazy(() =>
  import("../views/campaignManagement/createCampaign")
);

const PageNotFound = lazy(() => import("../views/notFoundPage"));

const RoutesDetails = [
  {
    defaultRoutes: "",
    Component: PublicRoute,
    props: {},
    isPrivateRoute: false,
    children: [
      { path: "/login", Component: AuthRoutes.Login, exact: true },
      { path: "/", Component: AuthRoutes.Login, exact: true },
    ],
  },
  {
    defaultRoutes: "",
    Component: PrivateRoute,
    props: {},
    isPrivateRoute: true,
    children: [
      //Dashboard
      { path: route.dashboard, Component: Dashboard.Dashboard, exact: true },

      {
        path: route.userManagement,
        Component: UserManagement.Admin.List,
        exact: true,
      },
      //! Admin Add
      {
        path: route.addUser,
        Component: UserManagement.Admin.Add,
        exact: true,
      },
      //! Recycler List
      {
        path: route.recyclerList,
        Component: UserManagement.Recycler.List,
        exact: true,
      },
      //! Recycler Details
      {
        path: route.recyclerDetails(`:id`),
        Component: UserManagement.Recycler.Details,
      },
      //! Recycler History
      {
        path: route.recyclerHistory(`:id`),
        Component: UserManagement.Recycler.History,
        exact: true,
      },
      {
        path: route.viewHistoryItems(":id"),
        Component: UserManagement.Recycler.ViewHistory,
        exact: true,
      },
      //! Recycler Rewards
      {
        path: route.recyclerRewards(":id"),
        Component: UserManagement.Recycler.Rewards,
        exact: true,
      },
      //! Recycler HardWare
      {
        path: route.recyclerHardware(":id"),
        Component: UserManagement.Recycler.Hardware,
        exact: true,
      },

      //! collectorList
      {
        path: route.collectorList,
        Component: UserManagement.Collector.List,
        exact: true,
      },

      {
        path: route.collectorDetails(`:id`),
        Component: UserManagement.Collector.Details,
        exact: true,
      },
      {
        path: route.collectorPickupHistory(`:id`),
        Component: UserManagement.Collector.PickupHistory,
        exact: true,
      },
      {
        path: route.collectorClearance(`:id`),
        Component: UserManagement.Collector.Clearance,
        exact: true,
      },

      {
        path: route.rolesList,
        Component: RolesList,
        exact: true,
      },
      {
        path: route.editPermission(":role"),
        Component: AdminPermissionEditPage,
        exact: true,
      },

      //! Collection Management
      {
        path: route.recyclerCollection,
        Component: CollectionManagement.Recycler.List,
        exact: true,
      },
      {
        path: route.viewRecyclerCollection,
        Component: CollectionManagement.Recycler.Details,
        exact: true,
      },
      {
        path: route.collectorCollection,
        Component: CollectionManagement.Collector.List,
        exact: true,
      },
      {
        path: route.viewCollectorCollection,
        Component: ViewCollectorCollectionPage,
        exact: true,
      },

      //* Collection Service Management
      {
        path: route.collectorServiceManagement,
        Component: CollecterServiceManagementPage,
        exact: true,
      },
      {
        path: route.collectorRequestDetails,
        Component: CollectorRequestDetailsPage,
        exact: true,
      },
      //* Rewards Management
      {
        path: route.rewardsManagement,
        Component: RewardsManagementPage,
        exact: true,
      },
      {
        path: route.addRewards,
        Component: AddRewardsPage,
        exact: true,
      },
      {
        path: route.viewReward,
        Component: ViewRewardsPage,
        exact: true,
      },
      {
        path: route.viewRewardsTransaction,
        Component: ViewRewardsTransactionPage,
        exact: true,
      },
      {
        path: route.viewFiatPoints,
        Component: ViewfiatAndDenominationsPage,
        exact: true,
      },
      {
        path: route.rewardsDetails,
        Component: RewardsDetailsPage,
        exact: true,
      },

      // App Content Management
      {
        path: route.appContentManagement.MaterialAndServices.List,
        Component: AppContentManagement.MaterialAndeServices.List,
        exact: true,
      },
      {
        path: route.appContentManagement.MaterialAndServices.Add,
        Component: AppContentManagement.MaterialAndeServices.Add,
        exact: true,
      },
      {
        path: route.appContentManagement.BannerManagement.List,
        Component: AppContentManagement.BannerManagement.List,
        exact: true,
      },
      { path: route.addWaste, Component: AddWeastePage, exact: true },
      { path: route.addGuidelines, Component: AddGuideLinePage, exact: true },
      //
      { path: route.createCampaign, Component: CampaignCreate, exact: true },
      { path: route.NotFoundPage, Component: PageNotFound, exact: true },
    ],
  },
];

export default RoutesDetails;
