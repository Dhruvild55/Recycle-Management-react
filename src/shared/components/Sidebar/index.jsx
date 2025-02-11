/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { SidebarLinks } from "./confiuge"; // Corrected typo "confiuge" to "config"
import { useSelector } from "react-redux";
import { useState, memo, useCallback } from "react";
import { FaCaretRight } from "react-icons/fa";
import { iconCarrateDown } from "../../../assets/images/icons";
import SettingIcon from "../../../assets/images/icons/SettingIcon";

const Sidebar = ({ isCollapsed, setSelectedMenu, selectedMenu }) => {
  const translations = useSelector((state) => state.settings.translations);
  const [openMenus, setOpenMenus] = useState({});

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
                selectedMenu.name === name ? "selected" : ""
              }`}
            >
              <div
                className="menu-header"
                onClick={() => {
                  handleMenuSelect(name, icon);
                  children && toggleMenu(name);
                }}
              >
                {icon}
                <Link to={path}>{translations[name]}</Link>
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
              {children && openMenus[name] && (
                <ul className="submenu">
                  {children.map(({ name: childName, path: childPath }) => (
                    <li
                      key={childName}
                      className={
                        selectedMenu === childName
                          ? "submenu-item selected"
                          : "submenu-item"
                      }
                    >
                      <Link
                        to={childPath}
                        onClick={() => handleMenuSelect(childName)}
                      >
                        {translations[childName]}
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
          <label>Settings</label>
        </div>
      </nav>
    </div>
  );
};

export default memo(Sidebar);
