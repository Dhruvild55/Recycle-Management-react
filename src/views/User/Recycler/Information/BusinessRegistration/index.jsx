/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import InputField from "../../../../../shared/components/InputFieldComponent";
import { useEffect } from "react";

const BusinessRegistration = ({ businessDetails }) => {
  const {
    register,
    reset,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    if (businessDetails) {
      reset({
        businessName: businessDetails.businessName || "",
        businessCategory: businessDetails.businessCategory || "",
        businessRegistrationNumber:
          businessDetails.businessRegistrationNumber || "",
      });
    }
  }, [businessDetails, reset]);

  return (
    <div>
      <label className="primary-title">Business Registration Information</label>
      <form style={{ marginTop: "15px" }}>
        <div className="row">
          <div className="col-md-4 mb-3">
            <InputField
              label="Business Name"
              name="businessName"
              type="text"
              register={register}
              errors={errors}
              readOnly
            />
          </div>
          <div className="col-md-4 mb-3">
            <InputField
              label="Business Category"
              name="businessCategory"
              type="text"
              register={register}
              errors={errors}
              readOnly
            />
          </div>
          <div className="col-md-4 mb-3">
            <InputField
              label="Business Registration Number"
              name="businessRegistrationNumber"
              type="text"
              register={register}
              errors={errors}
              readOnly
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessRegistration;
