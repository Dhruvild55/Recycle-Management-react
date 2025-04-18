import { useNavigate } from "react-router-dom";
import { iconBack } from "../../../assets/images/icons";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DragAndDropComponent from "../../../shared/components/DragAndDropComponent";
import InputField from "../../../shared/components/InputFieldComponent";
import { useMutation } from "@tanstack/react-query";
import { addSponsor } from "../../../query/SponsorManagement/AddSponsor/addSponsor.query";
import { ReactToastify } from "../../../shared/utils";

const AddSponsor = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
  };

  //! Add Sponsor
  const { mutate, isPending } = useMutation({
    mutationFn: (formData) => addSponsor(formData),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (error) => {
      ReactToastify(error?.message, "error");
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("Name", data.rewardName);
    formData.append("Image", image);

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
        <h1 className="primary-title">Add Sponsor</h1>
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
            isRequeirdLabel={true}
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" className="btn">
            {isPending ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSponsor;
