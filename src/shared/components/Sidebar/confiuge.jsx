import { route } from "../../constants/AllRoutes";

import {
  iconApp,
  iconBank,
  iconCollection,
  iconDashboard,
  iconDrop,
  iconReport,
  iconRewardsIcon,
  iconUser,
} from "../../../assets/images/icons";

export const SidebarLinks = [
  {
    name: "dashboard",
    path: route.dashboard,
    icon: iconDashboard,
  },
  {
    name: "user_management",
    path: route.userManagement,
    icon: iconUser,
  },
  {
    name: "app_content_Management",
    path: route.appContentManagement,
    icon: iconApp,
  },
  {
    name: "collaction_Management",
    path: "/",
    icon: iconDrop,
    children: [
      {
        name: "add_campaign",
        path: "/",
        icon: "",
      },
      {
        name: "update_campaign",
        path: "/",
        icon: "",
      },
    ],
  },
  {
    name: "rewards_Management",
    path: "/",
    icon: iconRewardsIcon,
    children: [
      {
        name: "add_campaign",
        path: "/",
        icon: "",
      },
      {
        name: "update_campaign",
        path: "/",
        icon: "",
      },
    ],
  },
  {
    name: "campaign_Management",
    path: route.createCampaign,
    icon: iconBank,
    children: [
      {
        name: "add_campaign",
        path: "/",
        icon: "",
      },
      {
        name: "update_campaign",
        path: "/",
        icon: "",
      },
    ],
  },
  {
    name: "collection_service_management",
    path: route.collectorServiceManagement,
    icon: iconCollection,
  },
  {
    name: "report",
    path: "/",
    icon: iconReport,
  },
];
