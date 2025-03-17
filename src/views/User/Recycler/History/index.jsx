/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import RecyclerInfoTopSection from "../Component/RecyclerInfoTopSection";
import { iconDelete } from "../../../../assets/images/icons";
import RecyclerHistory from "./RecyclerHistory";
import PreviousItems from "./PreviousItems";
import { useQuery } from "@tanstack/react-query";
import { getRecyclerHistory } from "../../../../query/users/Recycler/getRecyclerHistory/getRecyclerHistory.query";
import { Loader } from "../../../../shared/components/Loader";
import { useState } from "react";

const RecyclerHistoryDetails = () => {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);

  const { id } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["getRecyclerHistory", id, pageSize, pageNumber],
    queryFn: () => getRecyclerHistory({ id, pageSize, pageNumber }),
    staleTime: 30000,
  });
  console.log("previousData", data?.data);
  const pastPickupData = data?.data?.pastPickups;
  const nextPickupData = data?.data?.upcomingPickups;
  const pagination = data?.data?.pagination;
  const totalPages = Math.ceil((pagination?.totalPastPickups || 1) / pageSize);
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
        {isPending && (
          <div
            className="container-fluid"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40vh",
            }}
          >
            <Loader animation="border" width="50px" height="50px" />
          </div>
        )}
        <div className="recycler-history">
          <label className="primary-title">Recycler History</label>
          <RecyclerHistory upcommingPickUps={nextPickupData} />
        </div>
      </div>
      <div className="recycler-history">
        <PreviousItems
          pastPickUps={pastPickupData}
          isPending={isPending}
          pageNumber={pageNumber}
          totalPages={totalPages}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};
export default RecyclerHistoryDetails;
