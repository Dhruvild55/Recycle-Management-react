import { lazy } from "react";
import { route } from "../shared/constants/AllRoutes";

const PublicRoute = lazy(() => import("./PublicRoutes"));
const PrivateRoute = lazy(() => import("./PrivateRoutes"));

// Public Routes Files
const Login = lazy(() => import("../views/auth/login"));

// Private Routes Files
const Dashboard = lazy(() => import("../views/dashboard/"));

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
      { path: route.dashboard, Component: Dashboard, exact: true },
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
