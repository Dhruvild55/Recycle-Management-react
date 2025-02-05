/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { route } from "../../constants/AllRoutes";
import { navigationTo, removeToken } from "../../../helper/helper";
import { SUPPORTED_LANGUAGES } from "../../utils";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../../redux/appSetings/appSettingsSlice";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCaretDown } from "react-icons/rx";
import BreadCrumbs from "../BreadCrumbs";
import ProfilePic from "../ProfilePic";
import { Dropdown, OverlayTrigger } from "react-bootstrap";
import { iconBell } from "../../../assets/images/icons";
import { getProfile } from "../../../query/profile/getProfile/getProfile.query";
import { useQuery } from "@tanstack/react-query";

function Header({ toggleSidebar, isCollapsed }) {
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

  return (
    <>
      <header className={`header ${isCollapsed ? "shifted" : ""} `}>
        <div className={`header-left `}>
          <div>
            <IoMdMenu
              style={{ color: "black", fontSize: "28px" }}
              onClick={toggleSidebar}
            />
          </div>
          <div>
            <BreadCrumbs />
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
                <ProfilePic size={40} />
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
