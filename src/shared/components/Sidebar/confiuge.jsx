import AppIcon from "../../../assets/images/icons/AppIcon";
import BinIcon from "../../../assets/images/icons/BinIcon";
import CollectionIcon from "../../../assets/images/icons/CollectionIcon";
import MenuIcon from "../../../assets/images/icons/menuIcon";
import ReportIcon from "../../../assets/images/icons/ReportIcon";
import RewardsIcon from "../../../assets/images/icons/RewardsIcon";
import SponserIcon from "../../../assets/images/icons/SponserIcon";
import UserIcon from "../../../assets/images/icons/UserIcon";
import { route } from "../../constants/AllRoutes";

export const SidebarLinks = [
  {
    name: "dashboard",
    path: route.dashboard,
    icon: <MenuIcon color="#1F7F82" />,
  },
  {
    name: "user_management",
    path: route.userManagement,
    icon: <UserIcon color="#1F7F82" />,
  },
  {
    name: "app_content_Management",
    path: route.appContentManagement,
    icon: <AppIcon color="#1F7F82" />,
  },
  {
    name: "collaction_Management",
    path: route.collectionManagement,
    icon: <CollectionIcon color="#1F7F82" />,
  },
  {
    name: "rewards_Management",
    path: route.rewardsManagement,
    icon: <RewardsIcon color="#1F7F82" />,
  },
  {
    name: "campaign_Management",
    path: route.NotFoundPage,
    icon: <SponserIcon color="#1F7F82" />,
  },
  {
    name: "collection_service_management",
    path: route.NotFoundPage,
    icon: <BinIcon color="#1F7F82" />,
  },
  {
    name: "report",
    path: route.NotFoundPage,
    icon: <ReportIcon color="#1F7F82" />,
  },
];
