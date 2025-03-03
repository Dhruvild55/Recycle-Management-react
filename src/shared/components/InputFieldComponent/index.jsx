/* eslint-disable react/prop-types */
const InputField = ({
  label,
  placeholder,
  type,
  register,
  errors,
  name,
  validation,
  options, // New prop for dropdown options
  rows, // New prop for textarea rows
}) => {
  return (
    <div className="input-field">
      <label>{label}</label>

      {/* Handle Telephone Input */}
      {type === "tel" ? (
        <div className="phone-input">
          <div className="input-tel">
            <select className="country-code">
              <option>+60</option>
            </select>
            <input
              className="phone-input-box"
              type={type}
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
          <select
            className="roles-input"
            {...(register ? register(name, validation) : {})}
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
        /* Handle Textarea Input */
        <div>
          <textarea
            placeholder={placeholder}
            rows={rows || 4} // Default to 4 rows if not provided
            {...(register ? register(name, validation) : {})}
          />
          {errors?.[name] && (
            <p className="error-message">{errors[name].message}</p>
          )}
        </div>
      ) : (
        /* Handle Default Input */
        <div>
          <input
            placeholder={placeholder}
            type={type}
            {...(register ? register(name, validation) : {})}
          />
          {errors?.[name] && (
            <p className="error-message">{errors[name].message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;

// width: 100%;
//     padding: 10px;
//     border-radius: 5px;
