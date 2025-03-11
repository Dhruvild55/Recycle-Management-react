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
  viewRecycler: (id) => `/user-Management/recycler/view-recycler/${id}`,
  viewRecyclerItems: `/user-Management/view-recycler-items`,
  itemsDetails: "/user-Management/view-item-details",

  //! User Management Collector
  collectorList: "/user-Management/collector",
  viewCollector: (id) => `/user-Management/view-collector/${id}`,

  //! User Management Roles and Permission
  rolesList: "/user-Management/Roles",
  editPermission: (role) => `/user-Management/edit-permission/${role}`,

  //* App Content Management
  appContentManagement: "/app-content-Management",
  addWaste: "/app-content-Management/add-waste",
  addGuidelines: "/app-content-Management/add-Guidelines",

  //* Collection Management
  collectionManagement: "/collection-Management",
  viewRecyclerCollection: "/collection-Management/view-recycler-collection",
  viewCollectorCollection: "/collection-Management/view-collector-collection",

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
