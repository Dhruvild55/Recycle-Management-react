/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "../../../../../../shared/components/InputFieldComponent";
import { useForm } from "react-hook-form";
import { iconEdit } from "../../../../../../assets/images/icons";

const ConditionComponent = ({ data, isLoading }) => {
  console.log(isLoading);
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div className="guideline-main-section">
          <div className="guideline-title">
            <span className="primary-title">
              {!isEdit ? (
                data?.terms
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
                <p>{data?.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConditionComponent;
