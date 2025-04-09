import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DragAndDropComponent from "../../../../shared/components/DragAndDropComponent";
import { useMutation } from "@tanstack/react-query";
import { postMaterialData } from "../../../../query/AppContentManagement/MaterialAndServices/postMaterialData/postMaterialData.query";
import { ReactToastify } from "../../../../shared/utils";
import TopSection from "./Component/TopSection";
import { iconBack } from "../../../../assets/images/icons";
import InputField from "../../../../shared/components/InputFieldComponent";
import TitleComponent from "../../../../shared/components/TitleComponent";

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
    onError: (errors) => {},
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
        <button
          className="back-text"
          style={{ marginBottom: "20px" }}
          onClick={() => navigate(-1)}
        >
          <img src={iconBack} alt="Back" /> Back
        </button>
        <TopSection />
        <div
          className="common-page-toolbar"
          style={{
            marginTop: "10px",
            padding: "7px 0px",
            marginBottom: "10px",
          }}
        >
          <TitleComponent label="Material Type" />
        </div>
        <form
          className="add-waste-form"
          style={{ padding: "0px" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            label="Waste Name"
            placeholder="Type Here"
            type="text"
            name="wasteName"
            register={register}
            errors={errors}
            validation={{ required: "Waste Name is required" }}
            isRequeirdLabel={true}
          />

          <InputField
            label="Waste Description"
            placeholder="Type Here"
            type="textarea"
            name="wasteDetail"
            register={register}
            errors={errors}
            validation={{ required: "Waste Description is required" }}
            rows={4}
            isRequeirdLabel={true}
          />

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
