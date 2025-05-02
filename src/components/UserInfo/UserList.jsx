import React from 'react'
import UserCard from './UserCard';

const UserList =({ users, isLoading, error }) => {
    if (isLoading) {
      return <div className="loading-message">Loading...</div>;
    }
  
    if (error) {
      return <div className="error-message">Failed to fetch users.</div>;
    }
  
    return (
      <div className="user-list">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  };

export default UserList