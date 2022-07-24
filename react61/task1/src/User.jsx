import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useGithubUser = (userId) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error();
      })
      .then((userData) => {
        setUserData(userData);
      });
  }, [userId]);

  return userData;
};

const User = () => {
  const { userId } = useParams();

  if (!userData) {
    return null;
  }

  const { name, location, avatar_url } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
