/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { useSelector } from "react-redux";
import { useState, memo, useCallback, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";
import { SidebarLinks } from "./confiuge";
import { iconCarrateDown } from "../../../assets/images/icons";
import SettingIcon from "../../../assets/images/icons/SettingIcon";

const Sidebar = ({ isCollapsed, setSelectedMenu, selectedMenu }) => {
  const translations = useSelector((state) => state.settings.translations);
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation(); // Get the current location

  // Extract menu name from the URL if selectedMenu is not set
  useEffect(() => {
    if (!selectedMenu?.name) {
      const path = location.pathname.split("/")[1]; // Assuming the first segment is the menu name
      const matchedMenu = SidebarLinks.find((link) => link.path.includes(path));
      if (matchedMenu) {
        setSelectedMenu({ name: matchedMenu.name, icon: matchedMenu.icon });
      }
    }
  }, [location, selectedMenu, setSelectedMenu]);

  const toggleMenu = useCallback(
    (name) => {
      setOpenMenus((prev) => ({
        ...prev,
        [name]: !prev[name],
      }));
    },
    [setOpenMenus]
  );

  const handleMenuSelect = useCallback(
    (name, icon) => {
      setSelectedMenu({ name, icon });
    },
    [setSelectedMenu]
  );

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          {SidebarLinks.map(({ name, icon, path, children }) => (
            <li
              key={name}
              className={`menu-item ${
                selectedMenu?.name === name ? "selected" : ""
              }`}
            >
              <Link to={path}>
                <div
                  className="menu-header"
                  onClick={() => {
                    handleMenuSelect(name, icon);
                    children && toggleMenu(name);
                  }}
                >
                  {icon}
                  {translations.sidebar[name]}
                  {children && (
                    <span className="caret-icon">
                      {openMenus[name] ? (
                        <FaCaretRight />
                      ) : (
                        <img src={iconCarrateDown} alt="caret" />
                      )}
                    </span>
                  )}
                </div>
              </Link>
              {children && openMenus[name] && (
                <ul className="submenu">
                  {children.map(({ name: childName, path: childPath }) => (
                    <li
                      key={childName}
                      className={
                        selectedMenu?.name === childName
                          ? "submenu-item selected"
                          : "submenu-item"
                      }
                    >
                      <Link
                        to={childPath}
                        onClick={() => handleMenuSelect(childName)}
                      >
                        {translations.sidebar[childName]}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="settings-section">
          <SettingIcon color="#1F7F82" />
          <label>{translations.sidebar.settings}</label>
        </div>
      </nav>
    </div>
  );
};

export default memo(Sidebar);
