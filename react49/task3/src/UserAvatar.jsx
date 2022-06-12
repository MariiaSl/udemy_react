import React from 'react';

function UserAvatar({ avatarUrl, name }) {
  return <img className="avatar" src={avatarUrl} alt={name} />;
}

export default UserAvatar;
