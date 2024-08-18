import React from 'react';
import './ProfileView.css';

const ProfileView = ({ profile }) => {
  return (
    <div className="profile-view">
      <div className="banner-image">
        <img src="banner-placeholder.jpg" alt="Banner" />
      </div>
      <div className="profile-details">
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-email">{profile.email}</p>
        <p className="profile-description">{profile.description}</p>
        <div className="profile-info">
          <div className="info-section">
            <h3>Languages</h3>
            <p>{profile.languages}</p>
          </div>
          <div className="info-section">
            <h3>Education</h3>
            <p>{profile.education}</p>
          </div>
          <div className="info-section">
            <h3>Specialization</h3>
            <p>{profile.specialization}</p>
          </div>
        </div>
        <div className="social-media-links">
          <h3>Social Media</h3>
          <a href={profile.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
