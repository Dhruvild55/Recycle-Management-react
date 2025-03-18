import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import { useMutation } from "@tanstack/react-query";
import { postMaterialData } from "../../../../query/AppContentManagement/MaterialAndServices/postMaterialData/postMaterialData.query";
import { ReactToastify } from "../../../../shared/utils";

const AddNewWaste = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const previewFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setImage(previewFile);
    setValue("image", file); // Set file in React Hook Form
  };

  const postMaterial = useMutation({
    mutationFn: postMaterialData,
    onSuccess: (data) => {
      ReactToastify(data.message, "success");
      navigate(-1);
    },
    onError: (errors) => {
      console.log(errors);
    },
  });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("WasteName", data.wasteName);
    formData.append("Description", data.wasteDetail);
    formData.append("WasteImg", data.image);

    postMaterial.mutate(formData);
  };

  return (
    <div className="common-main-section">
      <div className="main-section" style={{ marginTop: "0px" }}>
        <button className="back-text" onClick={() => navigate(-1)}>
          &larr; BACK
        </button>
        <div
          className="common-page-toolbar"
          style={{ marginTop: "0px", padding: "7px" }}
        >
          <label className="primary-title">Add New Waste</label>
        </div>
        <form className="add-waste-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="wasteName">
              Waste Name<span style={{ color: "green" }}>*</span>
            </label>
            <input
              type="text"
              id="wasteName"
              {...register("wasteName", { required: "Waste Name is required" })}
              placeholder="Type Here"
            />
            <p className="error">{errors.wasteName?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="wasteDetail">
              Waste Description <span style={{ color: "green" }}>*</span>
            </label>
            <input
              type="text"
              id="wasteDetail"
              {...register("wasteDetail", {
                required: "Waste Description is required",
              })}
              placeholder="Type Here"
            />
            <p className="error">{errors.wasteDetail?.message}</p>
          </div>
          <div className="form-group-image">
            <label>
              Cover Image <span style={{ color: "green" }}>*</span>
            </label>
            <DragAndDropComponent image={image} onDrop={onDrop} />
          </div>
          <div className="form-actions">
            <button type="button" className="btn" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewWaste;
