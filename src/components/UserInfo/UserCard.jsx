import React from 'react'

const UserCard = ({ user }) => {
    return (
      <div className="user-card">
        <h2 className="user-name">{user.name}</h2>
        <div className="user-details">
          <p><span className="label">Email:</span> {user.email}</p>
          <p><span className="label">Phone:</span> {user.phone}</p>
          <p><span className="label">Website:</span> {user.website}</p>
        </div>
        <div >
          <p><span className="label">Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p><span className="label">Company:</span> {user.company.name}</p>
        </div>
      </div>
    );
  };

export default UserCard