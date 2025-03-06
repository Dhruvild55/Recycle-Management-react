/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, memo, useCallback, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";
import { SidebarLinks } from "./confiuge";
import { iconCarrateDown } from "../../../assets/images/icons";
import SettingIcon from "../../../assets/images/icons/SettingIcon";

const Sidebar = ({ isCollapsed, setSelectedMenu, selectedMenu }) => {
  const translations = useSelector((state) => state.settings.translations);
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (!selectedMenu?.name) {
      const path = location.pathname.split("/")[1];
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
          {SidebarLinks.map(({ name, icon, path, children }) => {
            const isActive = selectedMenu?.name === name;

            return (
              <li key={name} className={`menu-item `}>
                <Link to={path}>
                  <div
                    className={`menu-header ${isActive ? "selected" : ""}`}
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
                      <li key={childName}>
                        <Link
                          to={childPath}
                          className={
                            selectedMenu?.name === childName ? "selected" : ""
                          }
                          onClick={() => handleMenuSelect(childName)}
                        >
                          {translations.sidebar[childName]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
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
