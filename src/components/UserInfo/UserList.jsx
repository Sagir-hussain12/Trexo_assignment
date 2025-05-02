import React from 'react';
import UserCard from './UserCard'; 
import Slider from 'react-slick';
import './user.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const UserList = ({ users, isLoading, error }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Failed to fetch users.</div>;
  }

  return (
    <div className="user-list-container">
      <Slider {...settings}>
      {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </Slider>
    </div>
  );
};

export default UserList;