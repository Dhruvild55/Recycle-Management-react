import { lazy } from "react";
import { route } from "../shared/constants/AllRoutes";

const PublicRoute = lazy(() => import("./PublicRoutes"));
const PrivateRoute = lazy(() => import("./PrivateRoutes"));

// Public Routes Files
const Login = lazy(() => import("../views/auth/login"));

// Private Routes Files
const Dashboard = lazy(() => import("../views/dashboard"));

// user
const UserManagement = lazy(() => import("../views/User"));
const AddUserPage = lazy(() => import("../views/User/Admin/Admin-add"));

const RecyclerProfilePage = lazy(() =>
  import("../views/User/Recycler/recycler-profile")
);
const ViewRecyclerItemsPage = lazy(() =>
  import("../views/User/Recycler/ViewRecycleritems")
);
const CollecterProfilePage = lazy(() =>
  import("../views/User/Collecter/collecter-profile")
);
const AdminPermissionEditPage = lazy(() =>
  import("../views/User/Admin And Roles/edit-admin-permission")
);
const AppcontantManagementPage = lazy(() =>
  import("../views/appContentManagement/")
);
const AddWeastePage = lazy(() =>
  import("../views/appContentManagement/addNewWaste")
);
const AddGuideLinePage = lazy(() =>
  import("../views/appContentManagement/addGuidelines")
);

// Collection Management
const CollectionManagementPage = lazy(() =>
  import("../views/collectionManagement")
);
const ViewRecyclerCollectionPage = lazy(() =>
  import(
    "../views/collectionManagement/Recycler-collection/RecyclerCollectionInfo"
  )
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

// collecterServiceManagement
const CollecterServiceManagementPage = lazy(() =>
  import("../views/CollectorServiceManagement/NewCollecterPermissionList")
);
const ViewCollecterInformationPage = lazy(() =>
  import("../views/CollectorServiceManagement/ViewCollecterInformation")
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
      { path: "/login", Component: Login, exact: true },
      { path: "/", Component: Login, exact: true },
    ],
  },
  {
    defaultRoutes: "",
    Component: PrivateRoute,
    props: {},
    isPrivateRoute: true,
    children: [
      //Dashboard
      { path: route.dashboard, Component: Dashboard, exact: true },

      // user Management
      { path: route.userManagement, Component: UserManagement, exact: true },
      { path: route.addUser, Component: AddUserPage, exact: true },
      {
        path: route.viewRecycler(`:id`),
        Component: RecyclerProfilePage,
        exact: true,
      },
      {
        path: route.viewCollector(`:id`),
        Component: CollecterProfilePage,
        exact: true,
      },
      {
        path: route.editPermission(":role"),
        Component: AdminPermissionEditPage,
        exact: true,
      },
      {
        path: route.viewRecyclerItems,
        Component: ViewRecyclerItemsPage,
        exact: true,
      },

      // Collection Management
      {
        path: route.collectionManagement,
        Component: CollectionManagementPage,
        exact: true,
      },
      {
        path: route.viewRecyclerCollection,
        Component: ViewRecyclerCollectionPage,
        exact: true,
      },
      {
        path: route.viewCollectorCollection,
        Component: ViewCollectorCollectionPage,
        exact: true,
      },

      // Collection Service Management
      {
        path: route.collectorServiceManagement,
        Component: CollecterServiceManagementPage,
        exact: true,
      },
      {
        path: route.viewCollecterServiceInformation,
        Component: ViewCollecterInformationPage,
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
        path: route.appContentManagement,
        Component: AppcontantManagementPage,
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
