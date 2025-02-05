import { Navigate, Outlet, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import { setNav } from "../helper/helper";
import { route } from "../shared/constants/AllRoutes";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  setNav(navigate);
  if (!token) return <Navigate to={route.login} replace />;
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PrivateRoute;
