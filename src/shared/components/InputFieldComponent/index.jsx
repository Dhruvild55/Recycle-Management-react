/* eslint-disable react/prop-types */
const InputField = ({
  label,
  placeholder,
  type,
  register,
  errors,
  name,
  validation,
}) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      {type === "tel" ? (
        <div className="phone-input">
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
      ) : (
        <div>
          <input
            placeholder={placeholder}
            type={type}
            {...(register ? register(name, validation) : {})}
          />
          {errors && errors[name] && (
            <p className="error-message">{errors[name].message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
