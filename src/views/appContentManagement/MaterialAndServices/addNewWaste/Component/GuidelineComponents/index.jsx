/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"; // Import useForm
import { iconDelete, iconEdit } from "../../../../../../assets/images/icons";
import DragAndDropComponent from "../../../../../../shared/components/DragAndDropComponent";
import InputField from "../../../../../../shared/components/InputFieldComponent";
import { useMutation } from "@tanstack/react-query";
import { deleteGuideline } from "../../../../../../query/AppContentManagement/MaterialAndServices/DeleteGuideline/deleteGuideline.query";
import { ReactToastify } from "../../../../../../shared/utils";

const GuidelinesComponent = ({ data, isLoading, titleText, refetch }) => {
  const [image, setImage] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data) {
      setValue("description", data.description);
      setValue("title", data.title);
      setImage(data.imagePath);
    }
  }, [data, setValue]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
  };

  const onSubmit = async (formData) => {
    const submitData = FormData();
    submitData.append("Description", formData.description);
    submitData.append("Title", formData.Title);
    setIsEdit(false); // Exit edit mode after saving
  };

  //! Delete Guideline API
  const { mutate: deleteGuidelineId } = useMutation({
    mutationFn: deleteGuideline,
    onSuccess: (data) => {
      ReactToastify(data?.message, "sucess");
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
                  <button type="submit" className="save-btn">
                    Save
                  </button>
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
