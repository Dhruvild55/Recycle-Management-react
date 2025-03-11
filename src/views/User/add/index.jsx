import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ReactToastify } from "../../../shared/utils";
import { createUser } from "../../../query/users/createUsers/createUsers.query";
import { route } from "../../../shared/constants/AllRoutes";
import { useSelector } from "react-redux";
import ProfilePic from "../../../shared/components/ProfilePic";

export default function AddUserPage() {
  const navigate = useNavigate();
  const language = useSelector((store) => store.settings.translations);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      ReactToastify(data?.message, "success");
      navigate(route.userManagement);
    },
    onError: (error) => {
      ReactToastify("Anauthorized Token", "error");
    },
  });

  const onSubmit = async (data) => {
    createUserMutation.mutate(data);
  };
  const isValidName = (value) => {
    if (/[^A-Za-z\s'-]/.test(value)) {
      return `${language.pleaseEnterValidName}`;
    }

    // Check for excessive length
    if (value.length < 2 || value.length > 50) {
      return `${language.requireNameLength}`;
    }

    // Check for excessive repetition of the same character
    if (/([a-zA-Z])\1{2,}/.test(value)) {
      return `${language.pleaseEnterValidName}`;
    }

    // Ensure the name contains at least one vowel and one consonant
    if (
      !/[aeiouAEIOU]/.test(value) ||
      !/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(value)
    ) {
      return `${language.pleaseEnterValidName}`;
    }

    const keyboardPatterns = ["asdf", "qwer", "zxcv"];
    if (
      keyboardPatterns.some((pattern) => value.toLowerCase().includes(pattern))
    ) {
      return `${language.pleaseEnterValidName}`;
    }

    return true;
  };

  return (
    <div className="personal-info-form">
      <div>
        <button className="back-button">&larr; BACK</button>
      </div>
      <div className="personal-info-title">
        <h2>Personal Information</h2>
      </div>
      <div className="profile-photo-section">
        <div className="profile-left">
          <h1>Your Photo</h1>
          <p>This will be displayed your profile</p>
        </div>
        <div className="profile=center">
          <ProfilePic size={60} isChange={false} />
        </div>
        <div className="photo-actions">
          <button className="delete-button">Delete</button>
          <button className="update-button">Update</button>
        </div>
      </div>

      <form className="form">
        <div className="form-group">
          <div className="input-field">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your first name"
            />
          </div>

          <div className="input-field">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your last name"
            />
          </div>

          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-field">
            <label htmlFor="phone-number">Phone Number</label>
            <div className="phone-input">
              <span className="country-code">+60</span>
              <input
                type="text"
                id="phone-number"
                className="phone-input-box"
                placeholder="12-345 6789"
              />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
            />
            <small>Must be at least 8 characters.</small>
          </div>
        </div>

        <div className="form-group-last">
          <div className="input-field">
            <label htmlFor="roles">Roles</label>
            <select id="roles" className="roles-input">
              <option value="">Select your roles</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="editor">Editor</option>
            </select>
          </div>

          <div className="input-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="conform-password-input"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

{
  /* <h1 className="user-form-header">{language.create_user}</h1> */
}
{
  /* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-form-name-section">
          <div className="user-form-group">
            <label>{language.first_Name}</label>
            <input
              type="text"
              placeholder={language.first_Name}
              {...register("firstName", {
                required: `${language.requiredFirstName}`,
                validate: isValidName,
              })}
            />
            {errors.firstName && (
              <p className="error-message">{errors.firstName.message}</p>
            )}
          </div>
          <div className="user-form-group">
            <label>{language.last_name}</label>
            <input
              type="text"
              placeholder={language.last_name}
              {...register("lastName", {
                required: `${language.requiredLastName}`,
                validate: isValidName,
              })}
            />
            {errors.lastName && (
              <p className="error-message">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="user-form-group">
          <label>{language.email}</label>
          <input
            type="text"
            placeholder={language.email}
            {...register("email", {
              required: `${language.requiredEmail}`,
              pattern: {
                value: /^\S+@\S+$/i,
                message: `${language.requiredValidEmail}`,
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="user-form-group">
          <label>{language.password}</label>
          <input
            type="password"
            placeholder={language.password}
            {...register("password", {
              required: `${language.requiredPassword}`,
            })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <div className="user-form-group">
          <label>{language.phone_number}</label>
          <input
            type="number"
            placeholder={language.phone_number}
            {...register("phone", {
              required: `${language.requiredNumber}`,
              pattern: {
                value: /^\d{10}$/,
                message: `${language.invalidPhoneNumber}`,
              },
            })}
          />
          {errors.phone && (
            <p className="error-message">{errors.phone.message}</p>
          )}
        </div>
        <div className="user-form-group">
          <label>{language.business_registration_details}</label>
          <textarea
            placeholder={language.business_registration_details}
            {...register("businessRegistrationDetails", {
              required: `${language.requiredBusinessRegstationDetails}`,
            })}
          />
          {errors.businessRegistrationDetails && (
            <p className="error-message">
              {errors.businessRegistrationDetails.message}
            </p>
          )}
        </div>
        <div className="user-form-group">
          <label>{language.outlet_details}</label>
          <textarea
            placeholder={language.outlet_details}
            {...register("outletDetails", {
              required: `${language.requiredOutletDetails}`,
            })}
          />
          {errors.outletDetails && (
            <p className="error-message">{errors.outletDetails.message}</p>
          )}
        </div>
        <div className="user-form-group">
          <label>{language.selectRole}</label>
          <select {...register("role")}>
            {[
              "B2B Assistant",
              "Super Admin",
              "B2C",
              "Admin",
              "B2B Manager",
              "B2C Agent",
            ].map((items) => (
              <option key={items} value={items}>
                {items}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="user-form-submit-btn">
          {language.submit}
        </button>
      </form> */
}
