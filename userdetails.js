
import React from 'react';

const UserDetails = ({ user }) => {
  const { name, bio, dateOfBirth } = user;

  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Date of Birth: {dateOfBirth}</p>
    </div>
  );
};

export default UserDetails;
