export const route = {
  //* auth
  login: "/",

  //* Dashboard
  dashboard: "/dashboard",

  //* user Management
  userManagement: "/user-Management",
  addUser: "/user-Management/admin/add",
  viewRecycler: (id) => `/user-Management/view-recycler/${id}`,
  viewRecyclerItems: `/user-Management/view-recycler-items`,
  viewCollector: (id) => `/user-Management/view-collector/${id}`,
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
  viewCollecterServiceInformation:
    "/Collector-Service-Management/Collecter-Information",

  // * Not Found Page
  NotFoundPage: "/not-found",
};
