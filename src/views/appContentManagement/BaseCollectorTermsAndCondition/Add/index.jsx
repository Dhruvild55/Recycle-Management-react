import { useForm } from "react-hook-form";
import { iconBack } from "../../../../assets/images/icons";
import InputField from "../../../../shared/components/InputFieldComponent";
import TitleComponent from "../../../../shared/components/TitleComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addBaseTerms } from "../../../../query/AppContentManagement/getBaseCollectorTerms/AddBaseCollectorTerms/addBaseCollectorTerms.query";
import { ReactToastify } from "../../../../shared/utils";
import { editTermsAndCondition } from "../../../../query/AppContentManagement/MaterialAndServices/EditTremsAndCondition/editTermsAndCondition.query";

const BaseTermsAndConditionAdd = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const editData = location.state || null;
  console.log(editData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      term: editData?.title || "",
      description: editData?.description || "",
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("Terms", data.term);
    formData.append("Description", data.description);
    if (editData) {
      updateTerms(formData);
    } else {
      baseTerms(formData);
    }
  };

  // ! Create Terms
  const { mutate: baseTerms } = useMutation({
    mutationFn: addBaseTerms,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (error) => {
      ReactToastify(error?.message, "error");
    },
  });

  // ! Update Terms
  const { mutate: updateTerms } = useMutation({
    mutationFn: (data) => editTermsAndCondition(editData?.id, data),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (error) => {
      console.log(error);
      ReactToastify(error?.message, "error");
    },
  });

  return (
    <div className="common-main-section">
      <button className="back-text">
        <img src={iconBack} onClick={() => navigate(-1)} />
        {"   "} BACK
      </button>
      <div className="common-page-toolbar" style={{ padding: "7px 0px" }}>
        <TitleComponent
          label={
            editData
              ? "Updated Collector Terms & condition"
              : "Add Collector Terms & condition"
          }
        />
      </div>
      <form
        className="add-waste-form"
        style={{ padding: "0px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          label="Term"
          placeholder="Type Here"
          type="text"
          name="term"
          register={register}
          errors={errors}
          validation={{ required: "Term is Required" }}
          isRequeirdLabel={true}
        />
        <InputField
          label="Description"
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
            {editData ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BaseTermsAndConditionAdd;
