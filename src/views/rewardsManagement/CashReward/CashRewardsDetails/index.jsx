import { useNavigate, useParams } from "react-router-dom";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCashRewardsDetails } from "../../../../query/RewardsManagement/getCashRewardsDetails/getCashRewardsDetails.query";
import { iconBack } from "../../../../assets/images/icons";
import { approveCashReward } from "../../../../query/RewardsManagement/ApproveCashRewardByAdmin/approveCashReward.query";
import { Loader } from "../../../../shared/components/Loader";
import { ReactToastify } from "../../../../shared/utils";

const CashRewardsDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: cashRewardsDetails, isPending } = useQuery({
    queryKey: ["getCashRewardsDetails", id],
    queryFn: () => getCashRewardsDetails(id),
  });

  const { mutate } = useMutation({
    mutationFn: (data) => approveCashReward(id, data),
    onSuccess: (data) => {
      console.log(data);
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleApproval = (isApproved) => {
    mutate({ IsApprove: isApproved });
  };

  if (isPending) {
    return (
      <div className="loading-container">
        <p>Loading details...</p>
      </div>
    );
  }

  const details = cashRewardsDetails?.data;
  if (!details) {
    return (
      <div className="error-container">
        <p>No data found</p>
      </div>
    );
  }

  const {
    accountHolderName,
    accountNumber,
    amountToReceive,
    bankName,
    cashBackLocation,
    city,
    country,
    phoneNo,
    phoneNo2,
    pointsToConvert,
    postCode,
    recipientAddress,
    userImg,
    userName,
  } = details;

  return (
    <>
      <div className="common-main-section">
        <div className="header-section">
          <button className="back-text" onClick={() => navigate(-1)}>
            <img src={iconBack} alt="Back" /> Back
          </button>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h1 className="primary-title">Convert2Cash Detail</h1>
        </div>
        <div>
          <p className="title">Points</p>
          <div className="fields-section">
            <div className="fields-group">
              <label>Points to Convert </label>
              <input type="text" value={pointsToConvert} readOnly />
            </div>
            <div className="fields-group">
              <label>Amount to Receive</label>
              <input type="text" value={`RM ` + amountToReceive} readOnly />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <p className="title">Bank Account Detail</p>
          <div className="fields-section-1">
            <div className="fields-group">
              <label htmlFor="cashback">Cashback Location</label>
              <input
                type="text"
                id="cashback"
                value={cashBackLocation}
                readOnly
              />
            </div>
            <div className="fields-group">
              <label htmlFor="holder-name">Account Holder Name</label>
              <input
                type="text"
                id="holder-name"
                value={accountHolderName}
                readOnly
              />
            </div>
            <div className="fields-group">
              <label htmlFor="bank-name">Bank Name</label>
              <input type="text" id="bank-name" value={bankName} readOnly />
            </div>
            <div className="fields-group">
              <label htmlFor="account-number">Account Number</label>
              <input
                type="text"
                id="account-number"
                value={accountNumber}
                readOnly
              />
            </div>
            <div className="third-row">
              <div className="fields-group">
                <label htmlFor="postcode">Post Code</label>
                <input type="text" id="postcode" value={postCode} readOnly />
              </div>
              <div className="fields-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" value={city} readOnly />
              </div>
              <div className="fields-group">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" value={country} readOnly />
              </div>
            </div>
            <div
              className="fields-group address"
              style={{ marginBottom: "30px" }}
            >
              <label htmlFor="address">Recipient Address</label>
              <input
                type="text"
                id="address"
                value={recipientAddress}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
      <div className="common-main-section" style={{ marginTop: "20px" }}>
        <p className="primary-title">User Detail</p>
        <div className="userDetails-section" style={{ display: "flex" }}>
          <div className="profile-section">
            <ProfilePic size={180} isChange={false} image={userImg} />
          </div>
          <div className="fields-section">
            <div className="fields-group">
              <label htmlFor="username">User Name</label>
              <input type="text" id="username" value={userName} readOnly />
            </div>
            <div className="fields-group">
              <label htmlFor="phone1">Phone No.</label>
              <input type="text" id="phone1" value={phoneNo} readOnly />
            </div>
            <div className="fields-group">
              <label htmlFor="phone2">Phone No.</label>
              <input type="text" id="phone2" value={phoneNo2} readOnly />
            </div>
          </div>
        </div>
        <div className="actions">
          <p className="primary-title">Approval Convert2Cash</p>
          <div className="form-actions">
            <button
              type="submit"
              className="submit-button"
              disabled={isPending}
              onClick={() => handleApproval("Completed")}
            >
              {isPending ? (
                <Loader animation="border" width="20px" height="20px" />
              ) : (
                "Accept"
              )}
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => handleApproval("Rejected")}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CashRewardsDetails;
