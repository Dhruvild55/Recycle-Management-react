/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createCampaign } from "../../../query/campaign/createCampaign/createCampaign.query";
import { ReactToastify } from "../../../shared/utils";
import { useNavigate } from "react-router-dom";
import { route } from "../../../shared/constants/AllRoutes";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CreateCampaign = () => {
  const language = useSelector((store) => store.settings.translations);

  useEffect(() => {
    document.title = "Campaign Managemant | Recycle Management ";
  }, []);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [otp, setOtp] = useState([]);

  // const handleOtpChange = (index, value) => {
  //   if (/^\d?$/.test(value)) {
  //     const updatedOtp = [...otp];
  //     updatedOtp[index] = value;
  //     setOtp(updatedOtp);

  //     if (value && index < 3) {
  //       document.getElementById(`otp-${index + 1}`).focus();
  //     }
  //   }
  // };

  const createCampaignMutation = useMutation({
    mutationFn: createCampaign,
    onSuccess: (data) => {
      ReactToastify(data.message.value, "success");
      navigate(route.dashboard);
    },
    onError: (error) => {},
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("Title", data.Title);
    formData.append("Description", data.Description);
    formData.append("startDate", new Date(data.startDate).toISOString());
    formData.append("endDate", new Date(data.endDate).toISOString());
    formData.append("PinCodes", JSON.stringify([]));
    formData.append("ExelPath", "");
    formData.append("ImagePath", "");
    formData.append("BannerPath", "");

    if (data.ImageLogo[0]) {
      formData.append("ImageLogo", data.ImageLogo[0]);
    }
    if (data.BannerLogo[0]) {
      formData.append("BannerLogo", data.BannerLogo[0]);
    }
    if (data.ExcelFile[0]) {
      formData.append("ExcelFile", data.ExcelFile[0]);
    }

    createCampaignMutation.mutate(formData);
  };

  return (
    <div className="campaign-form-contaier">
      {/* <h1 className="campaign-form-header">{language.createCampaign}</h1> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="campaign-form-title-section">
          <div className="campaign-form-group">
            <label>{language.title}</label>
            <input
              type="text"
              placeholder={language.title}
              {...register("Title", {
                required: `${language.title} ${language.isRequire}`,
              })}
            />
            {errors.Title && (
              <p className="error-message">{errors.Title.message}</p>
            )}
          </div>
        </div>
        <div className="campaign-form-description-section">
          <div className="campaign-form-group">
            <label>{language.description}</label>
            <textarea
              placeholder={language.description}
              {...register("Description", {
                required: `${language.description} ${language.isRequire}`,
              })}
            />
            {errors.Description && (
              <p className="error-message">{errors.Description.message}</p>
            )}
          </div>
        </div>
        <div className="campaign-form-date-section">
          <div className="campaign-form-group">
            <label>{language.startDate}</label>
            <input
              type="date"
              placeholder={language.startDate}
              {...register("startDate", { required: "start Date is required" })}
            />
          </div>
          <div className="campaign-form-group">
            <label>{language.endDate}</label>
            <input
              type="date"
              placeholder={language.endDate}
              {...register("endDate", { required: "End Date is required" })}
            />
          </div>
        </div>
        <div className="campaign-form-upload-file-section">
          <div className="campaign-form-group">
            <label>{language.uploadLogo}</label>
            <input
              type="file"
              accept="image/*"
              {...register("ImageLogo", { required: true })}
            />
          </div>
          <div className="campaign-form-group">
            <label>{language.uploadBanner}</label>
            <input
              type="file"
              accept="image/*"
              {...register("BannerLogo", { required: true })}
            />
          </div>
        </div>
        <div className="campaign-form-group">
          <label>{language.uploadExcelFiles}</label>
          <input
            type="file"
            accept=".xls,.xlsx"
            {...register("ExcelFile", { required: true })}
          />
        </div>

        <button className="campaign-form-submit-btn" type="submit">
          {language.submit}
        </button>
      </form>
    </div>
  );
};

export default CreateCampaign;
