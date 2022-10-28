import React from 'react';
import { Link } from 'react-router-dom';
// import UserProfile from './UserProfile';
// import { useState } from 'react';

export const UserCard = ({ user }) => {
  return (
    <div key={user.id} className='user-card flex flex-col align-center rounded-2xl space-y-1 shadow-lg shadow-cyan-500/50'>
      <img className='user-avatar rounded-full mb-4' src={user.picture.large} alt="avatar" />
      <h1><span>Name: </span>
        {user.name.title} {user.name.first} {user.name.last}
      </h1>
      <h2><span>Gender: </span>{user.gender}</h2>
      <h2><span>Email: </span>{user.email}</h2>
      <h2><span>Home Address: </span>{user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.country}.</h2>
      <h2><span>Postcode: </span>{user.location.postcode}</h2>
      <div className="text-cyan-500 italic font-bold">
      <Link to={`/Users/${user.login.username}`}>more info...</Link>
      </div>
    </div>
  )
}

export default UserCard