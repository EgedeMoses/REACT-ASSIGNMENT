
import React, { useState, useEffect } from 'react';
import UserDetails from './userdetails';

const Profile = ({ users }) => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    setUsersData(users);
  }, []);

  return (
    <div>
      {usersData.map(user => (
        <UserDetails key={user.name} user={user} />
      ))}
    </div>
  );
};

export default Profile;