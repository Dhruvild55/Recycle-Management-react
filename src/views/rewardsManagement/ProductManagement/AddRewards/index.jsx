import { useNavigate } from "react-router-dom";
import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createReward } from "../../../../query/RewardsManagement/CreateReward/createReward.query";
import { useForm } from "react-hook-form";
import { getRewardsCategory } from "../../../../query/RewardsManagement/GetRewardsCategory/getRewardsCategory.query";
import { ReactToastify } from "../../../../shared/utils";
import { iconBack } from "../../../../assets/images/icons";
import DragAndDropExcel from "./ExcelDragAndDropComponent";
import InputField from "../../../../shared/components/InputFieldComponent";

const AddRewards = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [excelFile, setExcelFile] = useState(null);

  const handleExcelUpload = (file) => {
    setExcelFile(file);
  };

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: createReward,
    onSuccess: (data) => {
      ReactToastify("Reward Created Successfully", "success");
      navigate(-1);
    },
    onError: (error) => {
      console.error("Error creating reward:", error);
      ReactToastify("Error creating reward", "error");
    },
  });

  const categoryData = [
    { categoryId: 1, category: "Privilege" },
    { categoryId: 2, category: "Food And Beverage" },
    { categoryId: 3, category: "Lifestyle" },
  ];

  // const { data: categoryData, isLoading: isCategoryLoading } = useQuery({
  //   queryKey: ["getRewardsCategory"],
  //   queryFn: getRewardsCategory,
  // });

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("RewardName", data.rewardName);
    formData.append("Point", data.point);
    formData.append("Validity", data.validity);
    formData.append("RewardCategory", data.category);
    formData.append("Description", data.shortDescription);
    formData.append("RewardImg", image);
    formData.append("BulkVoucher", excelFile);

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    mutate(formData);
  };

  return (
    <div className="common-main-section">
      <div className="header-section">
        <button className="back-text" onClick={() => navigate(-1)}>
          <img src={iconBack} /> Back
        </button>
      </div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <h1 className="primary-title">Add New Product</h1>
      </div>
      <form className="add-reward-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group-image" style={{ marginBottom: "20px" }}>
          <DragAndDropComponent image={image} onDrop={onDrop} />
        </div>
        <div className="form-group">
          <InputField
            label="Reward Name"
            name="rewardName"
            placeholder="Type here"
            type="text"
            register={register}
            rules={{ required: "Reward Name is required" }}
            errors={errors}
            required
          />
        </div>
        <div className="form-group">
          <InputField
            label="Point(pts)"
            name="point"
            placeholder="Type here"
            register={register}
            type="number"
            rules={{ required: "Points are required" }}
            errors={errors}
            required
          />
        </div>
        <div className="form-group">
          <InputField
            label="Validity (days)"
            name="validity"
            register={register}
            type="number"
            rules={{ required: "Validity is required" }}
            errors={errors}
            required
          />
        </div>
        <div className="form-group">
          <InputField
            label="Rewards Category"
            name="category"
            register={register}
            type="select"
            options={categoryData?.map((item) => ({
              value: item.categoryId,
              label: item.category,
            }))}
            rules={{ required: "Category is required" }}
            errors={errors}
            required
          />
        </div>
        <div className="form-group">
          <InputField
            label="Reward Short Description"
            name="shortDescription"
            register={register}
            type="textarea"
            rules={{ required: "Description is required" }}
            errors={errors}
            required
          />
        </div>
        <div className="form-group-image" style={{ marginBottom: "20px" }}>
          <label>
            Bulk Upload<span style={{ color: "green" }}>*</span>
          </label>
          <DragAndDropExcel file={excelFile} onDrop={handleExcelUpload} />
        </div>

        <div className="form-actions">
          <button type="button" className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" className="btn" disabled={isPending}>
            {isPending ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRewards;
