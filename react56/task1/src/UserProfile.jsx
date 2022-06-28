import React from 'react';

// class UserProfile extends React.Component {
//   render() {
// const { user } = this.state;

const UserProfile = ({ userData }) => {
  if (!userData) {
    return null;
  }

  const { avatar_url, name, location } = userData;

  return (
    <div className="user">
      <img className="user__avatar" alt="User_Avatar" src={avatar_url}></img>
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default UserProfile;
