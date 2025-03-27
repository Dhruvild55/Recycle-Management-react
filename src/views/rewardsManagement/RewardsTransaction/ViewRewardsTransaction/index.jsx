import { useNavigate, useParams } from "react-router-dom";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { useQuery } from "@tanstack/react-query";
import { getRewardTransactionDetails } from "../../../../query/RewardsManagement/getRewardsTransactionDetails/getRewardTeansactionDetail.query";
import { Loader } from "../../../../shared/components/Loader";

const ViewRewardsTransaction = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const { data, isPending } = useQuery({
    queryKey: ["rewardsTransactionDetails", id],
    queryFn: () => getRewardTransactionDetails(id),
  });
  console.log(data?.data);
  return (
    <>
      <div className="common-main-section" style={{ minHeight: "450px" }}>
        <div className="header-section">
          <button className="back-text" onClick={() => navigate(-1)}>
            &larr; BACK
          </button>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h1 className="primary-title">Reward Transaction Detail</h1>
        </div>
        {isPending ? (
          <div className="loader-container">
            <Loader animation="border" width="50px" height="50px" />
          </div>
        ) : (
          <div className="form-container-rewards">
            <div className="image-section" style={{ paddingTop: "20px" }}>
              <ProfilePic
                size={200}
                isChange={false}
                image={data?.data?.rewardImg}
              />
            </div>
            <div className="fields-section">
              <div className="fields-group">
                <label>Reward Name</label>
                <input type="text" value={data?.data?.rewardName} readOnly />
              </div>
              <div className="fields-group">
                <label>Redeem Date</label>
                <input type="text" value={data?.data?.redeemDate} readOnly />
              </div>
              <div className="fields-group">
                <label>Point Spent</label>
                <input
                  type="text"
                  value={`${data?.data?.pointSpent} pts`}
                  readOnly
                />
              </div>
              <div className="fields-group">
                <label>Claimed Date</label>
                <input type="text" value={data?.data?.claimedDate} readOnly />
              </div>
              <div className="fields-group">
                <label>Status</label>
                <input type="text" value={data?.data?.status} readOnly />
              </div>
              <div className="fields-group">
                <label>Validity Date</label>
                <input type="text" value={data?.data?.validityDate} readOnly />
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="common-main-section"
        style={{ marginTop: "20px", marginBottom: "20px", minHeight: "400px" }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h1 className="primary-title">User Detail</h1>
        </div>
        {isPending ? (
          <div className="loader-container">
            <Loader animation="border" width="50px" height="50px" />
          </div>
        ) : (
          <div className="form-container-rewards">
            <div className="image-section" style={{ paddingTop: "20px" }}>
              <ProfilePic
                size={200}
                isChange={false}
                image={data?.data?.userImg}
              />
            </div>
            <div className="fields-section">
              <div className="fields-group">
                <label>User ID</label>
                <input type="text" value={data?.data?.userId} readOnly />
              </div>
              <div className="fields-group">
                <label>Email address</label>
                <input type="text" value={data?.data?.email} readOnly />
              </div>
              <div className="fields-group">
                <label>Name</label>
                <input type="text" value={data?.data?.userName} readOnly />
              </div>
              <div className="fields-group">
                <label>Phone No.</label>
                <input type="text" value={data?.data?.phoneNo} readOnly />
              </div>
              <div className="fields-group full-width">
                <label>Address</label>
                <input type="text" value={data?.data?.address} readOnly />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewRewardsTransaction;
