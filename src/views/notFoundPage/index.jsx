import { useNavigate } from "react-router-dom";
import { route } from "../../shared/constants/AllRoutes";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "270px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <p style={{ fontSize: "20px", fontWeight: "600" }}>
        {" "}
        This page is under development!
      </p>
      <button
        onClick={() => navigate(route.dashboard)}
        style={{ background: "#c9ffdf", padding: "10px", borderRadius: "5px" }}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default NotFoundPage;
