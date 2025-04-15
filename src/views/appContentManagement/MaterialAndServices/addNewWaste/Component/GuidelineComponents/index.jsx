/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"; // Import useForm
import { iconDelete, iconEdit } from "../../../../../../assets/images/icons";
import DragAndDropComponent from "../../../../../../shared/components/DragAndDropComponent";
import InputField from "../../../../../../shared/components/InputFieldComponent";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteGuideline } from "../../../../../../query/AppContentManagement/MaterialAndServices/DeleteGuideline/deleteGuideline.query";
import { ReactToastify } from "../../../../../../shared/utils";
import { getFilePath } from "../../../../../../query/getfilePath/filePath.query";
import { updateGuideline } from "../../../../../../query/AppContentManagement/MaterialAndServices/UpdateGuideline/updateGuideline.query";

const GuidelinesComponent = ({
  data,
  isLoading,
  titleText,
  refetch,
  serviceId,
  isCollectorGuideline,
}) => {
  console.log(data, serviceId);
  const [image, setImage] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // ! Get Image API
  const { data: imageData } = useQuery({
    queryKey: ["filePathguidline", data?.imagePath],
    queryFn: () => getFilePath({ image: data?.imagePath }),
    enabled: !!data?.imagePath,
  });

  useEffect(() => {
    if (data) {
      setValue("description", data.description);
      setValue("title", data.title);
    }
  }, [data, setValue]);

  useEffect(() => {
    if (imageData) {
      setImage({
        preview: imageData,
        name: "Existing Image",
      });
    }
  }, [imageData]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setValue("image", file); // Set file in React Hook Form
  };

  // ! Update Guideline
  const { mutate: update } = useMutation({
    mutationFn: ({ id, submitData }) => updateGuideline({ id, submitData }),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      refetch();
    },
    onError: (errors) => {
      ReactToastify(errors?.message, "error");
    },
  });

  const onSubmit = async (formData) => {
    const submitData = new FormData();
    submitData.append("Description", formData.description);
    submitData.append("Title", formData.title);
    submitData.append("GuidelineImg", formData.image);
    submitData.append("MyServiceId", serviceId);
    submitData.append(
      "IsForCollector",
      isCollectorGuideline ? "true" : "false"
    );
    update({ id: data?.id, submitData });
    setIsEdit(false);
  };

  //! Delete Guideline API
  const { mutate: deleteGuidelineId } = useMutation({
    mutationFn: deleteGuideline,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      refetch();
    },
    onError: (error) => {
      ReactToastify(error?.message, "error");
    },
  });

  const handleDelete = (id) => {
    deleteGuidelineId(id);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div className="guideline-main-section">
          <div className="guideline-title">
            <span className="primary-title">
              {titleText}:{" "}
              {!isEdit ? (
                data?.title
              ) : (
                <InputField
                  type="text"
                  register={register}
                  name="title"
                  validation={{ required: "TItle is required" }}
                  errors={errors}
                />
              )}
            </span>
            <div>
              <button
                style={{ border: "none" }}
                onClick={() => setIsEdit(true)}
              >
                <img src={iconEdit} />
              </button>
              <button style={{ border: "none" }}>
                <img src={iconDelete} onClick={() => handleDelete(data?.id)} />
              </button>
            </div>
          </div>
          <div className="add-waste-form" style={{ padding: "0px" }}>
            <div
              className="form-group-image"
              style={{ marginBottom: "20px", marginTop: "20px" }}
            >
              <DragAndDropComponent image={image} onDrop={onDrop} />
            </div>
            <div className="content-section" style={{ marginTop: "20px" }}>
              <p>Content Description</p>
              {isEdit ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  {" "}
                  {/* Submit on save */}
                  <InputField
                    type="textarea"
                    register={register}
                    name="description"
                    validation={{ required: "Description is required" }}
                    errors={errors}
                  />
                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => setIsEdit(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn">
                      Update
                    </button>
                  </div>
                </form>
              ) : (
                <p>{data?.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GuidelinesComponent;
