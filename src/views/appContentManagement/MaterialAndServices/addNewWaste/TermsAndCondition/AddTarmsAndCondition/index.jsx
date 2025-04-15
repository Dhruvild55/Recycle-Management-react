import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { route } from "../../../../../../shared/constants/AllRoutes";
import { iconBack } from "../../../../../../assets/images/icons";
import InputField from "../../../../../../shared/components/InputFieldComponent";
import { useForm } from "react-hook-form";
import TitleComponent from "../../../../../../shared/components/TitleComponent";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMaterialAndServicesById } from "../../../../../../query/AppContentManagement/MaterialAndServices/getMaterialAndServiceNameById/materialAndServicesById.query";
import { createTremsAndCondition } from "../../../../../../query/AppContentManagement/MaterialAndServices/CreateTermsAndCondition/createTermsAndCondition.query";
import { ReactToastify } from "../../../../../../shared/utils";
import { editTermsAndCondition } from "../../../../../../query/AppContentManagement/MaterialAndServices/EditTremsAndCondition/editTermsAndCondition.query";

const AddTermsAndCondition = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state;
  const isEdit = !!editData;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({});

  // Pre-fill form values if editing
  useEffect(() => {
    if (isEdit) {
      setValue("Terms", editData?.terms);
      setValue("Description", editData?.description);
      setValue("MyServiceId", editData?.myServiceId);
    }
  }, [editData, isEdit, setValue]);

  const onSubmit = (data) => {
    if (isEdit) {
      updateTerms(data);
    } else {
      createTerms(data);
    }
  };

  // Get Material and Service options
  const { data } = useQuery({
    queryKey: ["getMaterialAndServicesOption"],
    queryFn: () => getMaterialAndServicesById(),
  });

  // Create Terms
  const { mutate: createTerms } = useMutation({
    mutationFn: (data) => createTremsAndCondition(data),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (error) => {
      console.log(error);
      ReactToastify(error?.message, "error");
    },
  });

  // ! Update Terms
  const { mutate: updateTerms } = useMutation({
    mutationFn: (data) => editTermsAndCondition(editData?.id, data), // make sure editData includes `id`
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
      <button
        className="back-text"
        style={{ marginBottom: "20px" }}
        onClick={() =>
          navigate(
            route.appContentManagement.MaterialAndServices.Add.TermsAndCondition
          )
        }
      >
        <img src={iconBack} alt="Back" /> Back
      </button>
      <div>
        <TitleComponent
          label={
            isEdit ? "Edit Terms And Conditions" : "Add Terms And Conditions"
          }
        />
      </div>

      <form
        className="add-waste-form"
        onSubmit={handleSubmit(onSubmit)}
        style={{ padding: "10px 0px 0px 0px" }}
      >
        <InputField
          type="text"
          register={register}
          name="Terms"
          validation={{ required: "Title is required" }}
          errors={errors}
          label="Title"
          isRequeirdLabel={true}
        />
        <InputField
          type="textarea"
          register={register}
          name="Description"
          validation={{ required: "Description is required" }}
          errors={errors}
          label="Description"
          isRequeirdLabel={true}
        />
        {!isEdit && (
          <InputField
            label="Select Type"
            type="select"
            name="MyServiceId"
            options={
              data?.data?.map((category) => ({
                value: category.myServiceId,
                label: category.materilaName,
              })) || []
            }
            register={register}
            errors={errors}
            validation={{ required: "Service is required" }}
            isRequeirdLabel={true}
          />
        )}

        <div className="form-actions">
          <button type="button" className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" className="btn">
            {isEdit ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTermsAndCondition;
