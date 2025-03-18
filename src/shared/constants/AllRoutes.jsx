export const route = {
  //* auth
  login: "/",

  //* Dashboard
  dashboard: "/dashboard",

  //* user Management
  userManagement: "/user-Management/admin",
  addUser: "/user-Management/admin/add",

  //! User Management Recycler
  recyclerList: "/user-Management/recycler",
  recyclerDetails: (id) => `/user-Management/recycler/details/${id}`,
  recyclerHistory: (id) => `/user-Management/recycler/history/${id}`,
  recyclerRewards: (id) => `/user-Management/recycler/rewards/${id}`,
  recyclerHardware: (id) => `/user-Management/recycler/hardware/${id}`,
  viewHistoryItems: (id) =>
    `/user-Management/recycler/history/items-detail/${id}`,

  //! User Management Collector
  collectorList: "/user-Management/collector",
  collectorDetails: (id) => `/user-Management/collector/details/${id}`,
  collectorPickupHistory: (id) =>
    `/user-Management/collector/pickupHistory/${id}`,
  collectorClearance: (id) => `/user-Management/collector/clearance/${id}`,

  //! User Management Roles and Permission
  rolesList: "/user-Management/Roles",
  editPermission: (role) => `/user-Management/edit-permission/${role}`,

  //! App Content Management
  appContentManagement: {
    MaterialAndServices: {
      List: "/app-content-Management/material-services-management",
      Add: "/app-content-Management/material-services-management/add",
    },
    BannerManagement: {
      List: "/app-content-Management/banner-Management",
    },
  },
  // appContentManagement: "/app-content-Management",
  // addWaste: "/app-content-Management/add-waste",
  addGuidelines: "/app-content-Management/add-Guidelines",

  //! Collection Management
  recyclerCollection: "/collection-Management/recycler-collection",
  viewRecyclerCollection:
    "/collection-Management/recycler-collection/view-recycler-collection",
  collectorCollection: "/Collection-Management/collector-collection",
  viewCollectorCollection:
    "/collection-Management/collector-collection/view-collector-collection",

  //* Rewards Management
  rewardsManagement: "/rewards-Management",
  addRewards: "/rewards-Management/add",
  viewReward: "/rewards-Management/view-rewards",
  viewRewardsTransaction: "/rewards-Management/view-transaction",
  viewFiatPoints: "/rewards-Management/fiat-denominations-management",
  rewardsDetails: "/rewards-Management/rewards-details",

  //* Sponser Management
  createCampaign: "/create-campaign",

  //* Collection Service Management
  collectorServiceManagement: "/Collector-Service-Management",
  collectorRequestDetails:
    "/Collector-Service-Management/Collecter-request-details",

  // * Not Found Page
  NotFoundPage: "/not-found",
};
