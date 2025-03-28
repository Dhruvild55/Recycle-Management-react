/* eslint-disable react/prop-types */
const ButtonComponent = ({ label, onClick, className, disable, icon }) => {
  return (
    <div>
      <button onClick={onClick} className={className} disabled={disable}>
        {label} {icon}
      </button>
    </div>
  );
};

export default ButtonComponent;
