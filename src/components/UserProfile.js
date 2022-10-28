//Still working on this

import React from 'react';
import { useParams } from 'react-router-dom';
// import Users from './Users';
// import { useParams } from 'react-router-dom';

export const UserProfile = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>User Profile</h1>
      <h2>{params.UserId}</h2>
    </div>
  )
}

export default UserProfile

