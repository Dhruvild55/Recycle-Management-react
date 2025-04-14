/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import InputField from "../../../../../shared/components/InputFieldComponent";
import { useEffect } from "react";

const BusinessAddress = ({ businessDetailsData }) => {
  const lattitude = businessDetailsData?.lattitude;
  const longitude = businessDetailsData?.longitude;
  const {
    register,
    reset,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    if (businessDetailsData) {
      reset({
        addressLine1: businessDetailsData?.addressLine1,
        addressLine2: businessDetailsData?.addressLine2,
        city: businessDetailsData?.city,
        state: businessDetailsData?.state,
        zipCode: businessDetailsData?.zipCode,
        country: businessDetailsData?.countryCode,
      });
    }
  }, [businessDetailsData, reset]);

  const mapSrc = `https://maps.google.com/maps?q=${lattitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <label className="primary-title">Business Address</label>
      <form style={{ marginTop: "15px" }}>
        <div className="row">
          <div className="col-md-6 mb-2 col-lg-5">
            <InputField
              label="Unit No."
              name="addressLine1"
              type="text"
              register={register}
              errors={errors}
              readOnly
            />
          </div>
          <div className="col-md-6 mb-2 col-lg-7">
            <InputField
              label="Address"
              name="addressLine2"
              type="text"
              register={register}
              errors={errors}
              readOnly
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-2 col-lg-5">
            <InputField
              label="City"
              name="city"
              type="text"
              register={register}
              errors={errors}
              readOnly
            />
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6 mb-2">
                <InputField
                  label="State / Province"
                  name="state"
                  type="text"
                  register={register}
                  errors={errors}
                  readOnly
                />
              </div>
              <div className="col-md-6 mb-2">
                <InputField
                  label="Postcode"
                  name="zipCode"
                  type="text"
                  register={register}
                  errors={errors}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3 col-lg-5">
          <InputField
            label="Country Code"
            name="country"
            type="text"
            register={register}
            errors={errors}
            readOnly
          />
        </div>

        <div className="row">
          <div className="col-12 mb-3">
            <div
              className="map-container"
              style={{ border: "1px solid #929292", borderRadius: "12px" }}
            >
              <iframe
                title="map"
                src={mapSrc}
                allowFullScreen
                style={{ width: "100%", height: "300px", border: 0 }}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default BusinessAddress;
