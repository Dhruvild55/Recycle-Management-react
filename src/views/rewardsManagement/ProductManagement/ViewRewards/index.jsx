import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getRewardsDetails } from "../../../../query/RewardsManagement/getRewardsDetailsById/getRewardsDetails.query";
import { iconBack } from "../../../../assets/images/icons";
import { useEffect, useState } from "react";
import { updateReward } from "../../../../query/RewardsManagement/updateReward/updateReward.query";

const ViewRewards = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const { id } = params;
  const isEdit = location.state?.isEdit;

  const { data } = useQuery({
    queryKey: ["getRewardsdetails", id],
    queryFn: () => getRewardsDetails({ id }),
  });

  const [formData, setFormData] = useState({
    rewardName: data?.data?.rewardName || "",
    validity: data?.data?.validity || "",
    point: data?.data?.point || "",
    rewardCategoryName: data?.data?.rewardCategoryName || "",
    description: data?.data?.description || "",
  });

  useEffect(() => {
    if (data?.data) {
      setFormData({
        rewardName: data.data.rewardName || "",
        validity: data.data.validity || "",
        point: data.data.point || "",
        rewardCategoryName: data.data.rewardCategoryName || "",
        description: data.data.description || "",
      });
    }
  }, [data]);

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, updatedData }) => updateReward(id, updatedData),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ id, updatedData: formData });
  };

  return (
    <div className="common-main-section">
      <div className="header-section">
        <button className="back-text" onClick={() => navigate(-1)}>
          <img src={iconBack} /> Back
        </button>
      </div>
      <form className="form-container-rewards" onSubmit={handleSubmit}>
        <div className="image-section" style={{ paddingTop: "20px" }}>
          <ProfilePic
            size={210}
            isChange={false}
            image={data?.data?.rewardImgPath}
          />
        </div>

        <div className="fields-section">
          <div className="fields-group">
            <label>Reward Name</label>
            <input
              type="text"
              name="rewardName"
              value={formData.rewardName}
              onChange={handleChange}
              readOnly={!isEdit}
            />
          </div>

          <div className="fields-group">
            <label>Validity (days)</label>
            <input
              type="text"
              name="validity"
              value={formData.validity}
              onChange={handleChange}
              readOnly={!isEdit}
            />
          </div>

          <div className="fields-group">
            <label>Reward Points</label>
            <input
              type="text"
              name="point"
              value={formData.point}
              onChange={handleChange}
              readOnly={!isEdit}
            />
          </div>

          <div className="fields-group">
            <label>Reward Category</label>
            <select
              name="rewardCategoryName"
              value={formData.rewardCategoryName}
              onChange={handleChange}
              disabled={!isEdit}
            >
              <option>{formData.rewardCategoryName}</option>
            </select>
          </div>

          <div className="fields-group full-width">
            <label>Reward Short Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              readOnly={!isEdit}
            ></textarea>
          </div>

          {isEdit && (
            <div className="form-actions">
              <button
                type="button"
                className="cancel-button"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="submit-button"
                // disabled={mutation.isLoading}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ViewRewards;
