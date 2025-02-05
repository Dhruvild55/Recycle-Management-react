/* eslint-disable react/prop-types */
const ButtonComponent = ({ label, onClick, className, disable }) => {
  return (
    <div>
      <button onClick={onClick} className={className} disabled={disable}>
        {label}
      </button>
    </div>
  );
};

export default ButtonComponent;
