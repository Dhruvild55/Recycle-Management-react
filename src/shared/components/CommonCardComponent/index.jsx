/* eslint-disable react/prop-types */
const CommonCardComponent = ({ image, title, description }) => {
  return (
    <div className="card-section-1">
      <div className="card">
        <img src={image} alt={title} className="card__image" />
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonCardComponent;
