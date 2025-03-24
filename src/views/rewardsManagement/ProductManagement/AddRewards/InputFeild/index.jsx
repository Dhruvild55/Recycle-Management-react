/* eslint-disable react/prop-types */
const InputField = ({
  label,
  name,
  type = "text",
  register,
  rules = {},
  errors,
  options = [],
  required = false,
}) => {
  return (
    <div className="form-group">
      <label>
        {label} {required && <span style={{ color: "green" }}>*</span>}
      </label>

      {type === "select" ? (
        <select {...register(name, rules)}>
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea {...register(name, rules)} rows="3"></textarea>
      ) : (
        <input type={type} {...register(name, rules)} />
      )}

      {errors?.[name] && <p className="error-text">{errors[name].message}</p>}
    </div>
  );
};

export default InputField;
