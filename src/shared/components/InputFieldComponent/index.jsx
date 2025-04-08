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
  options,
  rows,
  isRequeirdLabel,
  readOnly = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-field">
      <label htmlFor={name}>
        {label}
        {isRequeirdLabel ? <span style={{ color: "green" }}> *</span> : ""}
      </label>

      {type === "tel" ? (
        <div className="phone-input">
          <div className="input-tel">
            <select className="country-code" disabled={readOnly}>
              <option>+60</option>
            </select>
            <input
              className="phone-input-box"
              type="tel"
              placeholder={placeholder}
              readOnly={readOnly}
              {...register(name, validation)}
            />
          </div>
          {errors?.[name] && (
            <p className="error-message">{errors[name].message}</p>
          )}
        </div>
      ) : type === "select" ? (
        <>
          <select
            className="roles-input"
            disabled={readOnly}
            {...register(name, validation)}
          >
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
        <div>
          <textarea
            placeholder={placeholder}
            rows={rows || 4}
            readOnly={readOnly}
            {...register(name, validation)}
          />
          {errors?.[name] && (
            <p className="error-message">{errors[name].message}</p>
          )}
        </div>
      ) : (
        <>
          <div className="password-wrapper">
            <input
              id={name}
              placeholder={placeholder}
              type={
                type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
              readOnly={readOnly}
              {...register(name, validation)}
            />
            {type === "password" && !readOnly && (
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
