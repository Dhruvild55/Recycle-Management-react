import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createCollectorIncentive } from "../../../../../../query/AppContentManagement/MaterialAndServices/CreateCollectionIncentive/createCollectionIncentive.query";
import { ReactToastify } from "../../../../../../shared/utils";
import InputField from "../../../../../../shared/components/InputFieldComponent";
import { useForm } from "react-hook-form";
import { getMaterialAndServicesById } from "../../../../../../query/AppContentManagement/MaterialAndServices/getMaterialAndServiceNameById/materialAndServicesById.query";
import { useLocation, useNavigate } from "react-router-dom";
import { iconBack } from "../../../../../../assets/images/icons";
import TitleComponent from "../../../../../../shared/components/TitleComponent";

const AddCollectionIncentive = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const editData = location.state;
  const isEdit = !!editData;

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  // Prefill form in edit mode
  useEffect(() => {
    if (isEdit) {
      setValue("title", editData?.title);
      setValue("Description", editData?.description);
      setValue("MyServiceId", editData?.myServiceId); // Pre-populate form with existing data
    }
  }, [editData, isEdit, setValue]);

  //! Create or Update Incentive
  const { mutate: createIncentive, isPending } = useMutation({
    mutationFn: (data) => createCollectorIncentive(data),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(-1);
    },
    onError: (error) => {
      ReactToastify(error?.message, "error");
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // const payload = isEditMode ? { ...data, id: location.state.id } : data;
    const formdata = new FormData();
    formdata.append("MyServiceId", data.MyServiceId);
    formdata.append("Title", data.title);
    formdata.append("Description", data.Description);
    if (isEdit) {
      formdata.append("incentiveId", editData.id);
    }
    createIncentive(formdata);
  };

  //! Get Material and Service options
  const { data } = useQuery({
    queryKey: ["getMaterialAndServicesOption"],
    queryFn: () => getMaterialAndServicesById(),
  });

  return (
    <div className="common-main-section">
      <button
        className="back-text"
        style={{ marginBottom: "20px" }}
        onClick={() => navigate(-1)}
      >
        <img src={iconBack} alt="Back" /> Back
      </button>
      <div>
        <TitleComponent
          label={`${isEdit ? "Edit" : "Add"} Collection Incentive`}
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
          name="title"
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
        {!editData && (
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
          <button type="button" className="btn" onClick={() => reset()}>
            Cancel
          </button>
          <button type="submit" className="btn">
            {isPending
              ? isEdit
                ? "Updating..."
                : "Adding..."
              : isEdit
              ? "Update"
              : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCollectionIncentive;
