import { lazy } from "react";
import { route } from "../shared/constants/AllRoutes";
import {
  AppContentManagement,
  AuthRoutes,
  CollectionManagement,
  CollectionServiceManagement,
  Dashboard,
  HardwareShopManagement,
  PointsTransactionManagement,
  RewardsManagement,
  Setting,
  SponsorManagement,
  UserManagement,
} from "./lazyRoutes";

const PublicRoute = lazy(() => import("./PublicRoutes"));
const PrivateRoute = lazy(() => import("./PrivateRoutes"));

// ! User Management - Roles And Permission
const RolesList = lazy(() => import("../views/User/Admin And Roles/RolesList"));

const AdminPermissionEditPage = lazy(() =>
  import("../views/User/Admin And Roles/edit-admin-permission")
);

const AddWeastePage = lazy(() =>
  import("../views/appContentManagement/MaterialAndServices/addNewWaste")
);
const AddGuideLinePage = lazy(() =>
  import("../views/appContentManagement/addGuidelines")
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
      // ! Dashboard

      { path: route.dashboard, Component: Dashboard.Dashboard, exact: true },
      // ! User Management
      // * Admin / List
      {
        path: route.userManagement.Admin.List,
        Component: UserManagement.Admin.List,
        exact: true,
      },
      //* Admin / Add
      {
        path: route.userManagement.Admin.Add,
        Component: UserManagement.Admin.Add,
        exact: true,
      },
      //* Admin Edit
      {
        path: route.userManagement.Admin.Edit(":id"),
        Component: UserManagement.Admin.Edit,
        exact: true,
      },
      //! Recycler List
      {
        path: route.userManagement.Recycler.List,
        Component: UserManagement.Recycler.List,
        exact: true,
      },
      //* Recycler Details
      {
        path: route.userManagement.Recycler.Details(`:id`),
        Component: UserManagement.Recycler.Details,
      },
      // * Recycler History
      {
        path: route.userManagement.Recycler.History(`:id`),
        Component: UserManagement.Recycler.History,
        exact: true,
      },
      // * recycler History Details
      {
        path: route.userManagement.Recycler.ViewHistory(":id"),
        Component: UserManagement.Recycler.ViewHistory,
        exact: true,
      },
      // * Recycler Rewards
      {
        path: route.userManagement.Recycler.Rewards(":id"),
        Component: UserManagement.Recycler.Rewards,
        exact: true,
      },
      // * Recycler HardWare
      {
        path: route.userManagement.Recycler.Hardware(":id"),
        Component: UserManagement.Recycler.Hardware,
        exact: true,
      },
      // * Recycler Partner Points
      {
        path: route.userManagement.Recycler.PartnerPoints(":id"),
        Component: UserManagement.Recycler.PartnerPoints,
        exact: true,
      },

      //! collector List
      {
        path: route.userManagement.Collector.List,
        Component: UserManagement.Collector.List,
        exact: true,
      },

      {
        path: route.userManagement.Collector.Details.Info(`:id`),
        Component: UserManagement.Collector.Details,
        exact: true,
      },
      {
        path: route.userManagement.Collector.Details.PickupHistory.List(`:id`),
        Component: UserManagement.Collector.PickupHistory,
        exact: true,
      },
      {
        path: route.userManagement.Collector.Details.PickupHistory.Details(
          ":id"
        ),
        Component: UserManagement.Collector.ViewPickupHistory,
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
        path: route.collectionManagement.RecyclerCollection.List,
        Component: CollectionManagement.Recycler.List,
        exact: true,
      },
      {
        path: route.collectionManagement.RecyclerCollection.Details(":id"),
        Component: CollectionManagement.Recycler.Details,
        exact: true,
      },
      {
        path: route.collectionManagement.CollectorCollection.List,
        Component: CollectionManagement.Collector.List,
        exact: true,
      },
      {
        path: route.collectionManagement.CollectorCollection.Details(":id"),
        Component: CollectionManagement.Collector.Details,
        exact: true,
      },

      // ! collection Service Management
      {
        path: route.collectionServiceManagement.List,
        Component: CollectionServiceManagement.List,
        exact: true,
      },
      {
        path: route.collectionServiceManagement.Details(":id"),
        Component: CollectionServiceManagement.Details,
        exact: true,
      },
      //!  Rewards Management
      {
        path: route.rewardsManagement.ProductManagement.List,
        Component: RewardsManagement.ProductManagement.List,
        exact: true,
      },
      {
        path: route.rewardsManagement.ProductManagement.Add,
        Component: RewardsManagement.ProductManagement.Add,
        exact: true,
      },
      {
        path: route.rewardsManagement.ProductManagement.View(":id"),
        Component: RewardsManagement.ProductManagement.View,
        exact: true,
      },
      // * Rewards Management / Rewards Transaction
      {
        path: route.rewardsManagement.RewardsTransaction.List,
        Component: RewardsManagement.RewardsTransaction.List,
        exact: true,
      },
      // * Rewards Managemetn / View
      {
        path: route.rewardsManagement.RewardsTransaction.View(":id"),
        Component: RewardsManagement.RewardsTransaction.View,
        exact: true,
      },
      // * Reward Management / Fat Points Deno
      {
        path: route.rewardsManagement.FatPointAndPointDeno.View,
        Component: RewardsManagement.FatAdnPointDeno.View,
        exact: true,
      },
      // * Rewards Management / Cash Rewards
      {
        path: route.rewardsManagement.CashReward.List,
        Component: RewardsManagement.CashReward.List,
        exact: true,
      },
      // * Rewards Management / Cash Rewards Details
      {
        path: route.rewardsManagement.CashReward.View(":id"),
        Component: RewardsManagement.CashReward.View,
        exact: true,
      },

      // ! App Content Management
      // * Materia And Service List
      {
        path: route.appContentManagement.MaterialAndServices.List,
        Component: AppContentManagement.MaterialAndeServices.List,
        exact: true,
      },
      // * material and service add
      {
        path: route.appContentManagement.MaterialAndServices.Add.MaterialType,
        Component: AppContentManagement.MaterialAndeServices.Add.MaterialType,
        exact: true,
      },
      {
        path: route.appContentManagement.MaterialAndServices.Add
          .GuidelineUpdateAdd,
        Component:
          AppContentManagement.MaterialAndeServices.Add.GuidelineUpdateAdd,
        exact: true,
      },
      // * Material And Services / CollectorGuidline
      {
        path: route.appContentManagement.MaterialAndServices.Add
          .CollectorGuidline,
        Component:
          AppContentManagement.MaterialAndeServices.Add.CollectionGuidline,
        exact: true,
      },
      // * Material And Services / RecyclerGuideline
      {
        path: route.appContentManagement.MaterialAndServices.Add
          .RecyclerGuideline,
        Component:
          AppContentManagement.MaterialAndeServices.Add.RecyclerGuideline,
        exact: true,
      },
      // * Material And Services / Collection Incentive
      {
        path: route.appContentManagement.MaterialAndServices.Add
          .CollectionIncentive,
        Component:
          AppContentManagement.MaterialAndeServices.Add.CollectionIncentive,
        exact: true,
      },
      // * Material And Services / TremsAndCondition
      {
        path: route.appContentManagement.MaterialAndServices.Add
          .TermsAndCondition,
        Component:
          AppContentManagement.MaterialAndeServices.Add.TermsAndCondition,
        exact: true,
      },
      // * Banner Management List
      {
        path: route.appContentManagement.BannerManagement.List,
        Component: AppContentManagement.BannerManagement.List,
        exact: true,
      },
      // * Banner Management Add
      {
        path: route.appContentManagement.BannerManagement.Add,
        Component: AppContentManagement.BannerManagement.Add,
        exact: true,
      },
      // * Event Management / List
      {
        path: route.appContentManagement.EventManagement.List,
        Component: AppContentManagement.EventManagement.List,
        exact: true,
      },
      // * Event Management / Add
      {
        path: route.appContentManagement.EventManagement.Add,
        Component: AppContentManagement.EventManagement.Add,
        exact: true,
      },
      // * base Guideline / List
      {
        path: route.appContentManagement.BaseCollectorGuideline.List,
        Component: AppContentManagement.BaseCollectionGuideline.List,
        exact: true,
      },
      // * base Guideline / Add
      {
        path: route.appContentManagement.BaseCollectorGuideline.Add,
        Component: AppContentManagement.BaseCollectionGuideline.Add,
        exact: true,
      },
      // * base trems And Condition / Add
      {
        path: route.appContentManagement.BaseCollectorTerms.List,
        Component: AppContentManagement.BaseCollectionTerms.List,
        exact: true,
      },

      { path: route.addWaste, Component: AddWeastePage, exact: true },
      { path: route.addGuidelines, Component: AddGuideLinePage, exact: true },
      //
      { path: route.createCampaign, Component: CampaignCreate, exact: true },
      { path: route.NotFoundPage, Component: PageNotFound, exact: true },

      // ! sponsor Management
      // * sponsor Management List
      {
        path: route.sponsorManagement.List,
        Component: SponsorManagement.List,
        exact: true,
      },
      // * sponsor Management View
      {
        path: route.sponsorManagement.View.SponsorInfo(":id"),
        Component: SponsorManagement.View.SponsorInfo,
        exact: true,
      },
      // * sponsor Management / PartnerCatelogue List
      {
        path: route.sponsorManagement.View.PartnerCatelogue.List(":id"),
        Component: SponsorManagement.View.PartnerCatelogue.List,
        exact: true,
      },
      // * sponsor Management / PartnerCatelogue Add
      {
        path: route.sponsorManagement.View.PartnerCatelogue.Add,
        Component: SponsorManagement.View.PartnerCatelogue.Add,
        exact: true,
      },
      // * sponsor Management / Redimption History
      {
        path: route.sponsorManagement.View.RedimptionHistory(":id"),
        Component: SponsorManagement.View.RedimptionHistory,
        exact: true,
      },

      //! Points Transaction Management
      //* Points Transaction Management / Earning List
      {
        path: route.pointsTransactionManagement.Earning.List,
        Component: PointsTransactionManagement.Earning.List,
        exact: true,
      },
      // * Points Transaction Management / Usage List
      {
        path: route.pointsTransactionManagement.Usage.List,
        Component: PointsTransactionManagement.Usage.List,
        exact: true,
      },

      // ! Hardware Shop Management
      // * Hardware Shop Management / Product Listing
      {
        path: route.hardwareShopManagement.ProductListing.List,
        Component: HardwareShopManagement.ProductListing.List,
        exact: true,
      },
      // * Hardware Shop Management / Add Product
      {
        path: route.hardwareShopManagement.ProductListing.Add,
        Component: HardwareShopManagement.ProductListing.Add,
        exact: true,
      },
      // * Hardware shop Management / Product Details
      {
        path: route.hardwareShopManagement.ProductListing.Details(":id"),
        Component: HardwareShopManagement.ProductListing.Details,
        exact: true,
      },
      // * Hardware shop Management / Order History
      {
        path: route.hardwareShopManagement.OrderHistory.List,
        Component: HardwareShopManagement.OrderHistory.List,
        exact: true,
      },
      // * Hardware shop Management / Order History Details
      {
        path: route.hardwareShopManagement.OrderHistory.Details(":id"),
        Component: HardwareShopManagement.OrderHistory.Details,
        exact: true,
      },
      // * Hardware shop Management / Stock History
      {
        path: route.hardwareShopManagement.StockHistory.List,
        Component: HardwareShopManagement.StockHistory.List,
        exact: true,
      },

      // ! settings
      {
        path: route.settings.View,
        Component: Setting.View,
        exact: true,
      },
    ],
  },
];

export default RoutesDetails;
