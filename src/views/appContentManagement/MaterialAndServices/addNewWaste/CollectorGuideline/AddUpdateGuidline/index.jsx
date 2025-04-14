import { useLocation, useNavigate } from "react-router-dom";
import { iconBack } from "../../../../../../assets/images/icons";
import InputField from "../../../../../../shared/components/InputFieldComponent";
import { useForm } from "react-hook-form";
import DragAndDropComponent from "../../../../../../shared/components/DragAndDropComponent";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addGuideline } from "../../../../../../query/AppContentManagement/MaterialAndServices/AddGuideline/addGuideline.query";
import { getMaterialAndServicesById } from "../../../../../../query/AppContentManagement/MaterialAndServices/getMaterialAndServiceNameById/materialAndServicesById.query";
import { ReactToastify } from "../../../../../../shared/utils";
import { route } from "../../../../../../shared/constants/AllRoutes";

const AddUpdateGuideline = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [image, setImage] = useState(null);
  const isGuideline = location.state || null;
  console.log(isGuideline);

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

  // ! create Guideline
  const { mutate, isPending } = useMutation({
    mutationFn: addGuideline,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(
        isGuideline.isrecycler
          ? route.appContentManagement.MaterialAndServices.Add.RecyclerGuideline
          : route.appContentManagement.MaterialAndServices.Add.CollectorGuidline
      );
    },
    onError: (error) => {
      ReactToastify(error?.message, "error");
    },
  });

  //! get matrial and service id Data API
  const { data } = useQuery({
    queryKey: ["getMaterialAndServicesOption"],
    queryFn: () => getMaterialAndServicesById(),
  });

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("Title", data.title);
    formData.append("Description", data.detail);
    formData.append("GuidelineImg", data.image);
    formData.append("MyServiceId", data.serviceType);
    if (isGuideline.isrecycler) {
      formData.append("IsForCollector", false);
    } else {
      formData.append("IsForCollector", true);
    }
    mutate(formData);
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

        <form
          className="add-waste-form"
          style={{ padding: "0px", marginBottom: "20px" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            label="Title"
            placeholder="Type Here"
            type="text"
            name="title"
            register={register}
            errors={errors}
            validation={{ required: "Title is required" }}
            isRequeirdLabel={true}
          />
          <InputField
            label="selectType"
            type="select"
            name="serviceType"
            options={
              data?.data?.map((category) => ({
                value: category.myServiceId,
                label: category.materilaName,
              })) || []
            }
            register={register}
            errors={errors}
            validation={{ required: "Title is required" }}
            isRequeirdLabel={true}
          />

          <InputField
            label="Description"
            placeholder="Type Here"
            type="textarea"
            name="detail"
            register={register}
            errors={errors}
            validation={{ required: " Description is required" }}
            rows={4}
            isRequeirdLabel={true}
          />

          <div className="form-group-image">
            <label>
              Cover Image <span style={{ color: "green" }}>*</span>
            </label>
            <DragAndDropComponent image={image} onDrop={onDrop} />
          </div>
          {errors.status && (
            <p className="error-text">{errors.status.message}</p>
          )}
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
    </div>
  );
};
export default AddUpdateGuideline;
