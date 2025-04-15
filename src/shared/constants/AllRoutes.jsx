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
      PartnerPoints: (id) => `/user-Management/recycler/partner-points/${id}`,
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

  collectorClearance: (id) => `/user-Management/collector/clearance/${id}`,

  //! User Management Roles and Permission
  rolesList: "/user-Management/Roles",
  editPermission: (role) => `/user-Management/edit-permission/${role}`,

  //! App Content Management
  appContentManagement: {
    MaterialAndServices: {
      List: "/app-content-management/material-services-management",
      Add: {
        MaterialType:
          "/app-content-management/material-services-management/material-type",
        CollectorGuidline:
          "/app-content-management/material-services-management/collector-guideline",
        GuidelineUpdateAdd:
          "/app-content-management/material-services-management/guideline",
        RecyclerGuideline:
          "/app-content-management/material-services-management/recycler-guideline",
        CollectionIncentive:
          "/app-content-management/material-services-management/collection-incentive",
        TermsAndCondition:
          "/app-content-management/material-services-management/terms&condition",
        TermsAndConditionAdd:
          "/app-content-management/material-services-management/terms&condition/add",
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
    BaseCollectorGuideline: {
      List: "/app-content-management/base-collector-guideline",
      Add: "/app-content-management/base-collector-guideline/add",
    },
    BaseCollectorTerms: {
      List: "/app-content-management/base-collector-terms",
      Add: "/app-content-management/base-collector-terms/add",
    },
  },
  addGuidelines: "/app-content-Management/add-Guidelines",

  // ! Collection Management
  collectionManagement: {
    RecyclerCollection: {
      List: "/collection-management/recycler-collection",
      Details: (id) => `/collection-management/recycler-collection/${id}`,
    },
    CollectorCollection: {
      List: "/collection-management/collector-collection",
      Details: (id) => `/collection-management/collector-collection/${id}`,
    },
  },

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
      Details: (id) => `/hardware-shop-management/orderHistory/${id}`,
    },
    StockHistory: {
      List: "/hardware-shop-management/stockHistory",
    },
  },

  collectionServiceManagement: {
    List: "/collection-service-management",
    Details: (id) => `/collection-service-management/${id}`,
  },

  // * Not Found Page
  NotFoundPage: "/not-found",

  settings: {
    View: "/Settings",
  },
};
