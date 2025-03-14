/* eslint-disable react/prop-types */
import ProfilePic from "../ProfilePic";

const ProfileCardComponent = ({ userData = {} }) => {
  const {
    email = "dd@gmail.com",
    lastName = "Dudhiya",
    firstName = "Dhruvil",
    selfiePath = "",
    lastLoginDate = "1st March 2025",
    phoneNumber = "5643123456",
  } = userData;
  // Format createdAt date
  const formatDate = (dateString) => {
    if (!dateString || dateString === "0001-01-01T00:00:00") {
      return "Not Available";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <div className="user-card">
      <div className="user-profile">
        <ProfilePic size={100} isChange={true} image={selfiePath} />
      </div>
      <div className="user-info">
        <h2>
          {firstName} {lastName}
        </h2>
        <h3>{email}</h3>
        <h3>{phoneNumber}</h3>
      </div>
      <div className="user-since">
        <h2>Recycler Since:</h2>
        <h3>{formatDate(lastLoginDate)}</h3>
      </div>
    </div>
  );
};

export default ProfileCardComponent;
