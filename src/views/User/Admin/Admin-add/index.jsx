/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { data, useLocation, useNavigate } from "react-router-dom";
import { ReactToastify } from "../../../../shared/utils";
import { route } from "../../../../shared/constants/AllRoutes";
import { useForm } from "react-hook-form";
import ProfilePic from "../../../../shared/components/ProfilePic";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import InputField from "../../../../shared/components/InputFieldComponent";
import { createUser } from "../../../../query/users/createUsers/createUsers.query";
import { validationRules } from "../../../../shared/constants/ValidationRules";
import { Loader } from "../../../../shared/components/Loader";
import { useMediaQuery } from "@mui/material";

export default function AddUserPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const language = useSelector((store) => store.settings.translations);
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 425px)"); // Check screen size

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      if (location.state?.fromUserList) {
        queryClient.invalidateQueries(["userList"]);
      }
      navigate(route.userManagement);
    },
    onError: (error) => {
      console.log(error);
      ReactToastify(error?.response?.data?.message, "error");
    },
  });

  // Handle file selection
  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // Handle form submission
  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("FirstName", data.firstName);
    formData.append("LastName", data.lastName);
    formData.append("Email", data.email);
    formData.append("Password", data.password);
    formData.append("Phone", data.phone);
    formData.append("Role", data.roles);

    if (selectedImage) {
      formData.append("selfie", selectedImage);
    }

    mutate(formData);
  };

  return (
    <div className="create-admin-section">
      <div className="common-main-section">
        <div className="header-contant">
          <button
            className="back-text"
            onClick={() => navigate(route.userManagement)}
          >
            &larr; BACK
          </button>
        </div>
        <div className="personal-info-section">
          <label className="primary-title">Personal Information</label>
          <div className="profile-photo-section">
            {isMobile ? (
              <>
                <div className="profile-left">
                  <p className="profile-left-title">Your Photo</p>
                  <p>This will be displayed on your profile</p>
                </div>
                <div className="profile-sm">
                  <div className="profile-center">
                    <ProfilePic
                      size={60}
                      image={
                        selectedImage
                          ? URL.createObjectURL(selectedImage)
                          : null
                      }
                    />
                  </div>
                  <div className="photo-actions">
                    <button
                      className="delete-button"
                      onClick={() => setSelectedImage(null)}
                    >
                      Delete
                    </button>
                    <button
                      className="update-button"
                      onClick={() => fileInputRef.current.click()}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="profile-left">
                  <p className="profile-left-title">Your Photo</p>
                  <p>This will be displayed on your profile</p>
                </div>
                <div className="profile-center">
                  <ProfilePic
                    size={60}
                    image={
                      selectedImage ? URL.createObjectURL(selectedImage) : null
                    }
                  />
                </div>
                <div className="photo-actions">
                  <button
                    className="delete-button"
                    onClick={() => setSelectedImage(null)}
                  >
                    Delete
                  </button>
                  <button
                    className="update-button"
                    onClick={() => fileInputRef.current.click()}
                  >
                    Update
                  </button>
                </div>
              </>
            )}

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={onFileChange}
            />
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <InputField
                label={language.formFields.first_Name}
                placeholder={language.formFields.first_Name}
                type="text"
                register={register}
                errors={errors}
                name="firstName"
                validation={validationRules.firstName}
              />
              <InputField
                label={language.formFields.last_name}
                placeholder={language.formFields.last_name}
                type="text"
                register={register}
                errors={errors}
                name="lastName"
                validation={validationRules.lastName}
              />
              <InputField
                label="Username"
                placeholder="username"
                type="text"
                register={register}
                errors={errors}
                name="userName"
              />
            </div>
            <div className="form-group">
              <InputField
                label="phone number"
                placeholder="Phone Number"
                type="tel"
                register={register}
                errors={errors}
                name="phone"
                validation={validationRules.phone}
              />

              <InputField
                label="email"
                placeholder="Enter Your Email"
                type="email"
                register={register}
                errors={errors}
                name="email"
                validation={validationRules.email}
              />

              <div className="input-field">
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Must be at least 8 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </button>
                {errors.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div className="form-group-last">
              <div className="input-field">
                <label>Roles</label>
                <select
                  {...register("roles", {
                    required: "Role selection is required",
                  })}
                  className="roles-input"
                >
                  <option value="admin">Admin</option>
                  <option value="super Admin">Super Admin</option>
                  <option value="b2b Collector">B2B COLLECTOR</option>
                  <option value="b2b Recycler">B2B RECYCLER</option>
                  <option value="b2c Collector">B2C COLLECTOR</option>
                  <option value="b2c Recycler">B2C RECYCLER</option>
                </select>
                {errors.roles && (
                  <p className="error-message">{errors.roles.message}</p>
                )}
              </div>

              <div className="input-field">
                <label>Confirm Password</label>
                <input
                  type={showConformPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="conform-password-input"
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowConformPassword(!showConformPassword)}
                >
                  {showConformPassword ? <FiEye /> : <FiEyeOff />}
                </button>
                {errors.confirmPassword && (
                  <p className="error-message">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="submit-button"
                disabled={isPending}
              >
                {isPending ? (
                  <Loader animation="border" width="20px" height="20px" />
                ) : (
                  "Submit"
                )}
              </button>
              <button type="button" className="cancel-button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
