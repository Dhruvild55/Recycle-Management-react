export const route = {
  //* auth
  login: "/",

  //* Dashboard
  dashboard: "/dashboard",

  //* user Management
  userManagement: {
    Admin: {
      List: "/user-Management/admin",
      Add: "/user-Management/admin/add",
      Edit: (id) => `/user-Management/admin/edit/${id}`,
    },
    Recycler: {
      List: "/user-Management/recycler",
      Details: (id) => `/user-Management/recycler/details/${id}`,
      History: (id) => `/user-Management/recycler/history/${id}`,
      Rewards: (id) => `/user-Management/recycler/rewards/${id}`,
      Hardware: (id) => `/user-Management/recycler/hardware/${id}`,
      ViewHistory: (id) =>
        `/user-Management/recycler/history/items-detail/${id}`,
    },
    Collector: {
      List: "/user-Management/collector",
      Details: {
        Info: (id) => `/user-Management/collector/details/${id}`,
        PickupHistory: {
          List: (id) => `/user-Management/collector/pickupHistory/${id}`,
          Details: (id) =>
            `/user-Management/collector/pickupHistory/details/${id}`,
        },
      },
    },
  },

  //! User Management Collector
  // collectorList: "/user-Management/collector",
  // collectorDetails: (id) => `/user-Management/collector/details/${id}`,
  // collectorPickupHistory: (id) =>
  //   `/user-Management/collector/pickupHistory/${id}`,
  collectorClearance: (id) => `/user-Management/collector/clearance/${id}`,

  //! User Management Roles and Permission
  rolesList: "/user-Management/Roles",
  editPermission: (role) => `/user-Management/edit-permission/${role}`,

  //! App Content Management
  appContentManagement: {
    MaterialAndServices: {
      List: "/app-content-Management/material-services-management",
      Add: {
        MaterialType:
          "/app-content-management/material-services-management/material-type",
        CollectorGuidline:
          "/app-content-management/material-services-management/collector-guideline",
        RecyclerGuideline:
          "/app-content-management/material-services-management/recycler-guideline",
        CollectionIncentive:
          "/app-content-management/material-services-management/collection-incentive",
        TermsAndCondition:
          "/app-content-management/material-services-management/terms&condition",
      },
    },
    BannerManagement: {
      List: "/app-content-management/banner-management",
      Add: "/app-content-management/banner-management/add",
    },
    EventManagement: {
      List: "/app-content-management/event-management",
      Add: "/app-content-management/event-management/add",
    },
  },
  addGuidelines: "/app-content-Management/add-Guidelines",

  //! Collection Management
  recyclerCollection: "/collection-Management/recycler-collection",
  viewRecyclerCollection:
    "/collection-Management/recycler-collection/view-recycler-collection",
  collectorCollection: "/Collection-Management/collector-collection",
  viewCollectorCollection:
    "/collection-Management/collector-collection/view-collector-collection",

  //* Rewards Management
  viewRewardsTransaction: "/rewards-Management/view-transaction",
  viewFiatPoints: "/rewards-Management/fiat-denominations-management",
  rewardsDetails: "/rewards-Management/rewards-details",

  // ! Rewards Management
  rewardsManagement: {
    ProductManagement: {
      List: "/rewards-management/product-management",
      Add: "/rewards-management/product-management/add",
      View: (id) => `/rewards-management/product-management/${id}`,
    },
    RewardsTransaction: {
      List: "/rewards-management/rewards-transaction",
      View: (id) => `/rewards-management/rewards-transaction/${id}`,
    },
    FatPointAndPointDeno: {
      View: "/rewards-management/fat-points",
    },
    CashReward: {
      List: "/rewards-management/cash-reward",
      View: (id) => `/rewards-management/cash-reward/${id}`,
    },
  },

  //! Sponser Management
  sponsorManagement: {
    List: "/sponsor-Management/list",
    View: {
      SponsorInfo: (id) => `/sponsor-Management/list/view-sponsor-info/${id}`,
      PartnerCatelogue: {
        List: (id) => `/sponsor-Management/list/partner-catelogue/${id}`,
        Add: "/sponsor-Management/list/partner-catelogue/add",
        View: "/sponsor-Management/list/partner-catelogue/view",
      },
      RedimptionHistory: (id) =>
        `/sponsor-Management/list/redimption-history/${id}`,
    },
  },

  createCampaign: "/create-campaign",

  // ! Points Transaction Management
  pointsTransactionManagement: {
    Earning: {
      List: "/points-transaction-management/earning",
    },
    Usage: {
      List: "/points-transaction-management/usage",
    },
  },

  //!Hardware Shop Management
  hardwareShopManagement: {
    ProductListing: {
      List: "/hardware-shop-management/productListing",
      Add: "/hardware-shop-management/add",
      Details: (id) => `/hardware-shop-management/details/${id}`,
    },
    OrderHistory: {
      List: "/hardware-shop-management/orderHistory",
    },
    StockHistory: {
      List: "/hardware-shop-management/stockHistory",
    },
  },

  //* Collection Service Management
  collectorServiceManagement: "/Collector-Service-Management",
  collectorRequestDetails:
    "/Collector-Service-Management/Collecter-request-details",

  // * Not Found Page
  NotFoundPage: "/not-found",
};
