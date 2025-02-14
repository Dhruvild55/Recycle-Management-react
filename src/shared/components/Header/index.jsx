/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { navigationTo, removeToken } from "../../../helper/helper";
import { SUPPORTED_LANGUAGES } from "../../utils";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../../redux/appSetings/appSettingsSlice";
import { useEffect, useState } from "react";
import BreadCrumbs from "../BreadCrumbs";
import ProfilePic from "../ProfilePic";
import { Dropdown, OverlayTrigger } from "react-bootstrap";
import { iconBell, iconMenu } from "../../../assets/images/icons";
import { getProfile } from "../../../query/profile/getProfile/getProfile.query";
import { useQuery } from "@tanstack/react-query";
import MenuIcon from "../../../assets/images/icons/menuIcon";
import UserIcon from "../../../assets/images/icons/UserIcon";
import AppIcon from "../../../assets/images/icons/AppIcon";
import CollectionIcon from "../../../assets/images/icons/CollectionIcon";
import RewardsIcon from "../../../assets/images/icons/RewardsIcon";
import SponserIcon from "../../../assets/images/icons/SponserIcon";
import BinIcon from "../../../assets/images/icons/BinIcon";
import ReportIcon from "../../../assets/images/icons/ReportIcon";

function Header({ toggleSidebar, isCollapsed, selectedMenu }) {
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  useEffect(() => {
    dispatch(changeLanguage(selectedLanguage));
  }, [dispatch, selectedLanguage]);

  const handleSignout = () => {
    removeToken();
    navigationTo({ to: "/login", replace: true });
  };

  // get profile
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getProfile"],
    queryFn: () => getProfile(),
  });

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    setSelectedLanguage(language);
    dispatch(changeLanguage(language));
  };

  const formatTitle = (name) => {
    if (name) {
      return name
        .replace(/_/g, " ") // Replace "_" with space
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
    }
  };

  return (
    <>
      <header className={`header ${isCollapsed ? "shifted" : ""} `}>
        <div className={`header-left `}>
          <div>
            {selectedMenu.name === "dashboard" ? (
              <MenuIcon color="#181D27" />
            ) : selectedMenu.name === "user_management" ? (
              <UserIcon color="#181D27" />
            ) : selectedMenu.name === "app_content_Management" ? (
              <AppIcon color="#181D27" />
            ) : selectedMenu.name === "collaction_Management" ? (
              <CollectionIcon color="#181D27" />
            ) : selectedMenu.name === "rewards_Management" ? (
              <RewardsIcon color="#181D27" />
            ) : selectedMenu.name === "campaign_Management" ? (
              <SponserIcon color="#181D27" />
            ) : selectedMenu.name === "collection_service_management" ? (
              <BinIcon color="#181D27" />
            ) : selectedMenu.name === "report" ? (
              <ReportIcon color="#181D27" />
            ) : (
              ""
            )}
          </div>
          <div>
            <span style={{ fontSize: "24px", fontWeight: "600" }}>
              {formatTitle(selectedMenu.name)}
            </span>
            {/* <BreadCrumbs /> */}
          </div>
        </div>
        <div className="header-right">
          {/* <select
            className="dropdown-section"
            onChange={(e) => handleLanguageChange(e)}
            value={selectedLanguage}
          >
            {SUPPORTED_LANGUAGES.map((items) => (
              <option key={items.identifire}>{items.identifire}</option>
            ))}
          </select> */}
          <div>
            <img src={iconBell} />
          </div>
          <div className="profile">
            <Dropdown>
              <Dropdown.Toggle className="header-btn">
                <ProfilePic size={40} image={data?.data?.user?.selfiePath} />
                <label>{data?.data?.user?.firstName}</label>
              </Dropdown.Toggle>
              <Dropdown.Menu className="up-arrow">
                <Dropdown.Item
                // onClick={handleEditProfile}
                >
                  <i className="icon-account"></i>
                  My Profile
                </Dropdown.Item>
                <Dropdown.Item
                // onClick={handleChangePass}
                >
                  <i className="icon-lock"></i>
                  Change Password
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSignout()}>
                  <i className="icon-logout"></i>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
