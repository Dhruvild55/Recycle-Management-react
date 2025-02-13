import ProfilePic from "../ProfilePic";

const ProfileCardComponent = () => {
  return (
    <div className="user-card">
      <div className="user-profile">
        <ProfilePic size={90} />
      </div>
      <div className="user-info">
        <h2>Dhruvil</h2>
        <h3>dd@gmail.com</h3>
        <h3>785634167</h3>
      </div>
      <div className="user-since">
        <h2>Recycler Since:</h2>
        <h3>Thursday, jul 11 2024</h3>
      </div>
    </div>
  );
};

export default ProfileCardComponent;
