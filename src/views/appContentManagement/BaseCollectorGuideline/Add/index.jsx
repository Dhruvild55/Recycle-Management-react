/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { iconBack } from "../../../../assets/images/icons";
import InputField from "../../../../shared/components/InputFieldComponent";
import TitleComponent from "../../../../shared/components/TitleComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createBaseGuideline } from "../../../../query/AppContentManagement/BaseCollectorGuideline/createBaseGuideline/createBaseGuideline.query";
import { ReactToastify } from "../../../../shared/utils";
import { updateBaseCollectorGuidline } from "../../../../query/AppContentManagement/BaseCollectorGuideline/UpdateBaseCollectorGuideline/updateBaseCollectorGuidline.query";

const BaseGuidelineAdd = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state || null;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: editData?.title || "",
      description: editData?.description || "",
    },
  });

  //! Create BaseCollecton Guidline API
  const createBaseGuidelineAPI = useMutation({
    mutationFn: createBaseGuideline,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (error) => {
      console.error("error");
    },
  });

  // ! Update Base Collection Guidline API
  const { mutate: updateGuidlineMutation } = useMutation({
    mutationFn: ({ formData, id }) =>
      updateBaseCollectorGuidline({ formData, id }),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("Title", data.title);
    formData.append("Description", data.description);
    if (editData) {
      updateGuidlineMutation({ formData, id: editData.id });
    } else {
      createBaseGuidelineAPI.mutate(formData);
    }
  };
  return (
    <div className="common-main-section">
      <button className="back-text" onClick={() => navigate(-1)}>
        <img src={iconBack} /> Back
      </button>
      <div className="common-page-toolbar" style={{ padding: "7px 0px" }}>
        <TitleComponent
          label={
            editData ? "Updated Collector Guidline" : "Add Collector Guidline"
          }
        />
      </div>
      <form className="add-waste-form" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title"
          placeholder="Guideline Title"
          type="text"
          name="title"
          register={register}
          errors={errors}
          validation={{ required: "title is Required" }}
          isRequeirdLabel={true}
        />
        <InputField
          label="Guideline description"
          placeholder="Description.."
          type="textarea"
          name="description"
          register={register}
          errors={errors}
          validation={{ required: "Description is Required" }}
          isRequeirdLabel={true}
        />
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
  );
};

export default BaseGuidelineAdd;
