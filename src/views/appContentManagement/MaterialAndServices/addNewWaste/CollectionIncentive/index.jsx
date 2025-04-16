import { useForm } from "react-hook-form";
import InputField from "../../../../../shared/components/InputFieldComponent";
import TopSection from "../Component/TopSection";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMaterialAndServicesById } from "../../../../../query/AppContentManagement/MaterialAndServices/getMaterialAndServiceNameById/materialAndServicesById.query";
import { useNavigate } from "react-router-dom";
import { ReactToastify } from "../../../../../shared/utils";
import { createCollectorIncentive } from "../../../../../query/AppContentManagement/MaterialAndServices/CreateCollectionIncentive/createCollectionIncentive.query";
import { route } from "../../../../../shared/constants/AllRoutes";
import { iconBack } from "../../../../../assets/images/icons";
import TitleComponent from "../../../../../shared/components/TitleComponent";

const CollectionIncentive = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  // Get Material and Service options
  const { data } = useQuery({
    queryKey: ["getMaterialAndServicesOption"],
    queryFn: () => getMaterialAndServicesById(),
  });

  // Create Terms
  const { mutate: createIncentive, isPending } = useMutation({
    mutationFn: (data) => createCollectorIncentive(data),
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
    },
    onError: (error) => {
      console.log(error);
      ReactToastify(error?.message, "error");
    },
  });

  const onSubmit = (data) => {
    createIncentive(data);
  };
  return (
    <div className="common-main-section">
      <button
        className="back-text"
        style={{ marginBottom: "20px" }}
        onClick={() =>
          navigate(route.appContentManagement.MaterialAndServices.List)
        }
      >
        <img src={iconBack} alt="Back" /> Back
      </button>
      <TopSection />
      <div style={{ marginTop: "20px" }}>
        <TitleComponent label="Collection Incentive" />
      </div>

      <form
        className="add-waste-form"
        onSubmit={handleSubmit(onSubmit)}
        style={{ padding: "10px 0px 0px 0px" }}
      >
        <InputField
          type="text"
          register={register}
          name="Title"
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
        <div className="form-actions">
          <button type="button" className="btn" onClick={() => reset()}>
            Cancel
          </button>
          <button type="submit" className="btn">
            {isPending ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CollectionIncentive;
