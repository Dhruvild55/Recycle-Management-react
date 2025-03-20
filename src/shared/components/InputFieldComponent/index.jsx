/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputField = ({
  label,
  placeholder,
  type,
  register,
  errors,
  name,
  validation,
  options, // For dropdowns
  rows, // For textareas
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-field">
      <label>{label}</label>

      {type === "tel" ? (
        /* Handle Telephone Input */
        <div className="phone-input">
          <div className="input-tel">
            <select className="country-code">
              <option>+60</option>
            </select>
            <input
              className="phone-input-box"
              type="tel"
              placeholder={placeholder}
              {...register(name, validation)}
            />
          </div>
          {errors?.[name] && (
            <p className="error-message">{errors[name].message}</p>
          )}
        </div>
      ) : type === "select" ? (
        /* Handle Dropdown Input */
        <>
          <select className="roles-input" {...register(name, validation)}>
            {options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors?.[name] && (
            <p className="error-message">{errors[name].message}</p>
          )}
        </>
      ) : type === "textarea" ? (
        /* Handle Textarea Input */
        <div>
          <textarea
            placeholder={placeholder}
            rows={rows || 4}
            {...register(name, validation)}
          />
          {errors?.[name] && (
            <p className="error-message">{errors[name].message}</p>
          )}
        </div>
      ) : (
        /* Handle Default and Password Input */
        <>
          <div className="password-wrapper">
            <input
              placeholder={placeholder}
              type={
                type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
              {...register(name, validation)}
            />
            {type === "password" && (
              <button
                type="button"
                className="eye-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            )}
          </div>
          {errors?.[name] && (
            <p className="error-message">{errors[name].message}</p>
          )}
        </>
      )}
    </div>
  );
};

export default InputField;
