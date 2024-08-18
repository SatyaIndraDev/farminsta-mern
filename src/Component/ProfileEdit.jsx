import React, { useState } from 'react';
import './ProfileEdit.css';

const ProfileEdit = ({ profile, setProfile }) => {
  const [localProfile, setLocalProfile] = useState(profile);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleChange = (e) => {
    setLocalProfile({ ...localProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(localProfile);
    setIsUpdated(true);
  };

  return (
    <div className="profile-edit">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span className="label-text">Name</span>
          <input type="text" name="name" value={localProfile.name} onChange={handleChange} />
        </label>
        <label>
          <span className="label-text">Email</span>
          <input type="email" name="email" value={localProfile.email} onChange={handleChange} />
        </label>
        <label>
          <span className="label-text">Description</span>
          <textarea name="description" value={localProfile.description} onChange={handleChange}></textarea>
        </label>
        <label>
          <span className="label-text">Languages</span>
          <input type="text" name="languages" value={localProfile.languages} onChange={handleChange} />
        </label>
        <label>
          <span className="label-text">Education</span>
          <input type="text" name="education" value={localProfile.education} onChange={handleChange} />
        </label>
        <label>
          <span className="label-text">Specialization</span>
          <input type="text" name="specialization" value={localProfile.specialization} onChange={handleChange} />
        </label>
        <label>
          <span className="label-text">Twitter</span>
          <input type="text" name="twitter" value={localProfile.twitter} onChange={handleChange} />
        </label>
        <label>
          <span className="label-text">Instagram</span>
          <input type="text" name="instagram" value={localProfile.instagram} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
        {isUpdated && <p className="update-message">Profile updated successfully!</p>}
      </form>
    </div>
  );
};

export default ProfileEdit;
