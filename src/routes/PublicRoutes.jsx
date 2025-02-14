import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthLayout from "../layouts/auth-layout";

const PublicRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const redirect =
    location?.pathname === "/login" ? location?.pathname : "/dashboard";
  if (token) return <Navigate to={redirect} replace />;

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};
export default PublicRoute;
