import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import './Profile.css';
import profileImage from './Profile.png';


const Profile = () => {
  const mentor = {
    assigned: true,
    name: 'Mentor Name',
  };

  return (
    <>
    <Header />
      <Navbar />
      <h1 class="Profiletop">My Profile</h1>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-image-container">
          <img src={profileImage} alt="Profile" />
          </div>
          <div className="profile-info">
            <h3 className="profile-name">Aman Ullah Faisal</h3>
            <p className="profile-details"> HADYA-ID: H-3829 </p>
            <p className="profile-description">
              DESCRIPTION: CS Student at IBA Karachi.
            </p>
            <p className="profile-details">DATE OF BIRTH: 21/MAY/2013</p>
            <p className="profile-details">COUNTRY OF RESIDENCE: PAKISTAN</p>
            <p className="profile-details">CITY: KARACHI</p>
          </div>
          <div className="mentor-status">
            <h1>Mentor Status</h1>
            {mentor.assigned ? (
              <p>A mentor is assigned to you: {mentor.name}</p>
            ) : (
              <p>No mentor is assigned to you.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
