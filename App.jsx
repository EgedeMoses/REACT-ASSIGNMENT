
import React from 'react';
import Profile from './profile';

const users = [
  {
    name: 'Egede Moses',
    bio: 'To Gd be the glory',
    dateOfBirth: '01/01/1990'
  },
  {
    name: 'Jane Smith',
    bio: 'Consectetur adipiscing elit',
    dateOfBirth: '05/15/1985'
  }
];

const App = () => {
  return (
    <div>
      <h1>User Profiles</h1>
      <Profile users={users} />
    </div>
  );
};

export default App;