/* eslint-disable react/prop-types */
const InputField = ({ label, placeholder, type, register, errors, name }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      {type === "tel" ? (
        <div className="phone-input">
          <span className="country-code">+60</span>
          <input
            className="phone-input-box"
            type={type}
            placeholder={placeholder}
            {...register(name)}
          />
        </div>
      ) : (
        <div>
          <input
            placeholder={placeholder}
            type={type}
            {...(register ? register(name) : {})}
          />
          {errors && errors[name] && (
            <p className="error-message">{errors[name].message}</p>
          )}
        </div>
      )}
      {errors && errors[name] && (
        <p className="error-message">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
