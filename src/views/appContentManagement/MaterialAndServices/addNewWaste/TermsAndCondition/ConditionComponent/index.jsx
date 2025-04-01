/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "../../../../../../shared/components/InputFieldComponent";
import { useForm } from "react-hook-form";
import { iconDelete, iconEdit } from "../../../../../../assets/images/icons";
import { deleteGuideline } from "../../../../../../query/AppContentManagement/MaterialAndServices/DeleteGuideline/deleteGuideline.query";
import { useMutation } from "@tanstack/react-query";
import { ReactToastify } from "../../../../../../shared/utils";

const ConditionComponent = ({
  title,
  id,
  description,
  isLoading,
  isDelete,
  refetch,
}) => {
  console.log(isLoading);
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { mutate: deleteGuidelineId } = useMutation({
    mutationFn: deleteGuideline,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      refetch();
    },
    onError: (error) => {
      console.log(error);
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
              {!isEdit ? (
                title
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
              {isDelete && (
                <button style={{ border: "none" }}>
                  <img src={iconDelete} onClick={() => handleDelete(id)} />
                </button>
              )}
            </div>
          </div>
          <div className="add-waste-form" style={{ padding: "0px" }}>
            <div className="content-section" style={{ marginTop: "20px" }}>
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
                <p>{description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConditionComponent;
