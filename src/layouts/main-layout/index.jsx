/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Suspense, useState } from "react";
import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import useMediaQuery from "../../shared/hooks/useMediaQuery";
import { Loader } from "../../shared/components/Loader";

const MainLayout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const width = useMediaQuery(`(max-width:800px)`);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="main-layout">
      <Sidebar isCollapsed={sidebarVisible} />
      <div
        className={`main-content  ${
          width ? sidebarVisible && "active" : !sidebarVisible && "active"
        }`}
      >
        <Header toggleSidebar={toggleSidebar} isCollapsed={sidebarVisible} />
        <div className="container-fluid">
          <Suspense
            fallback={<Loader animation="border" width="50px" height="50px" />}
          >
            {children}
          </Suspense>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
