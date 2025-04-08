import AppIcon from "../../../assets/images/icons/AppIcon";
import BinIcon from "../../../assets/images/icons/BinIcon";
import CollectionIcon from "../../../assets/images/icons/CollectionIcon";
import HardwareIcon from "../../../assets/images/icons/HardwareIcon";
import MenuIcon from "../../../assets/images/icons/menuIcon";
import PointsIcon from "../../../assets/images/icons/PointsIcon";
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
    path: route.userManagement.Admin.List,
    icon: <UserIcon color="#1F7F82" />,
  },
  {
    name: "app_content_Management",
    path: route.appContentManagement.MaterialAndServices.List,
    icon: <AppIcon color="#1F7F82" />,
  },
  {
    name: "collaction_Management",
    path: route.collectionManagement.RecyclerCollection.List,
    icon: <CollectionIcon color="#1F7F82" />,
  },
  {
    name: "rewards_Management",
    path: route.rewardsManagement.ProductManagement.List,
    icon: <RewardsIcon color="#1F7F82" />,
  },
  {
    name: "sponsor_Management",
    path: route.sponsorManagement.List,
    icon: <SponserIcon color="#1F7F82" />,
  },
  {
    name: "collection_service_management",
    path: route.collectionServiceManagement.List,
    icon: <BinIcon color="#1F7F82" />,
  },
  {
    name: "point_transaction_management",
    path: route.pointsTransactionManagement.Earning.List,
    icon: <PointsIcon color="#1F7F82" />,
  },
  {
    name: "hardware_shop_Management",
    path: route.hardwareShopManagement.ProductListing.List,
    icon: <HardwareIcon color="#1F7F82" />,
  },
  {
    name: "report",
    path: route.NotFoundPage,
    icon: <ReportIcon color="#1F7F82" />,
  },
];
