/* eslint-disable no-unused-vars */
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getRewardsDetails } from "../../../../query/RewardsManagement/getRewardsDetailsById/getRewardsDetails.query";
import { iconBack } from "../../../../assets/images/icons";
import { useEffect, useState } from "react";
import { updateReward } from "../../../../query/RewardsManagement/updateReward/updateReward.query";
import { getRewardsCategory } from "../../../../query/RewardsManagement/GetRewardsCategory/getRewardsCategory.query";
import { ReactToastify } from "../../../../shared/utils";

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

  const { data: categoryData, isLoading: isCategoryLoading } = useQuery({
    queryKey: ["getRewardsCategory"],
    queryFn: getRewardsCategory,
  });

  const [formData, setFormData] = useState({
    rewardName: data?.data?.rewardName || "",
    validity: data?.data?.validity || "",
    point: data?.data?.point || "",
    rewardCategoryName: data?.data?.rewardCategoryName || "",
    description: data?.data?.description || "",
    rewardCategoryId: data?.data?.rewardCategoryId || "",
  });

  useEffect(() => {
    if (data?.data) {
      setFormData({
        rewardName: data.data.rewardName || "",
        validity: data.data.validity || "",
        point: data.data.point || "",
        rewardCategoryId: data.data.rewardCategoryId || "",
        rewardCategoryName: data.data.rewardCategoryName || "",
        description: data.data.description || "",
      });
    }
  }, [data]);

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, updatedData }) => updateReward(id, updatedData),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (error) => {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rewardCategoryId") {
      const selectedCategory = categoryData?.data?.find(
        (cat) => cat.categoryId === value
      );

      setFormData((prevData) => ({
        ...prevData,
        rewardCategoryId: value,
        rewardCategoryName: selectedCategory?.category || "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendData = new FormData();
    sendData.append("Description", formData?.description);
    sendData.append("Point", formData?.point);
    sendData.append("RewardName", formData?.rewardName);
    sendData.append("RewardCategoryId", formData?.rewardCategoryId);
    sendData.append("Validity", formData?.validity);
    mutate({ id, updatedData: sendData });
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
              name="rewardCategoryId"
              value={formData.rewardCategoryId}
              onChange={handleChange}
              disabled={!isEdit}
            >
              {/* Ensure there's a default option */}
              {categoryData?.data?.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.category}
                </option>
              ))}
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
