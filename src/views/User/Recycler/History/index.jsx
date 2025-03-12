import { useNavigate, useParams } from "react-router-dom";
import RecyclerInfoTopSection from "../Component/RecyclerInfoTopSection";
import { iconDelete } from "../../../../assets/images/icons";
import RecyclerHistory from "./RecyclerHistory";
import PreviousItems from "./PreviousItems";
import { useQuery } from "@tanstack/react-query";
import { getRecyclerHistory } from "../../../../query/users/Recycler/getRecyclerHistory/getRecyclerHistory.query";

const RecyclerHistoryDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["getRecyclerHistory", id],
    queryFn: () => getRecyclerHistory({ id }),
    staleTime: 30000,
  });
  console.log("previousData", data?.data);
  const pastPickupData = data?.data?.pastPickups;
  const nextPickupData = data?.data?.upcomingPickups;

  return (
    <div className="user-profile-section">
      <div className="common-main-section">
        <div className="header-section">
          <button
            className="back-text"
            onClick={() => navigate("/user-Management/recycler")}
          >
            &larr; BACK
          </button>
          <div className="right-section">
            <button className="" style={{ border: "none" }}>
              <img src={iconDelete} alt="delete icon" /> Deactivate Account
            </button>
          </div>
        </div>
        <RecyclerInfoTopSection />
        <div className="recycler-history">
          <label className="primary-title">Recycler History</label>
          <RecyclerHistory upcommingPickUps={nextPickupData} />
        </div>
      </div>
      <div className="recycler-history">
        <PreviousItems pastPickUps={pastPickupData} />
      </div>
    </div>
  );
};
export default RecyclerHistoryDetails;
