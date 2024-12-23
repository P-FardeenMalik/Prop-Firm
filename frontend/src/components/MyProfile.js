import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './styles/MyProfile.css'; // Import the CSS file for styling

const MyProfile = () => {
  const { userProfile, updateProfile } = useAuth();
  const [firstName, setFirstName] = useState(userProfile.firstName);
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [nickname, setNickname] = useState('');
  const [profilePic, setProfilePic] = useState(userProfile.profilePic);

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleUpdateProfile = () => {
    const updatedProfile = {
      firstName,
      profilePic,
    };
    updateProfile(updatedProfile);
    alert('Profile updated successfully!');
  };

  return (
    <div className="my-profile">
      <div className="profile-pic-upload">
        <h2>Upload Profile Picture</h2>
        <div className="upload-area" onClick={() => document.getElementById('fileInput').click()}>
          {profilePic ? (
            <img src={URL.createObjectURL(profilePic)} alt="Profile" className="profile-pic-preview" />
          ) : (
            <span className="upload-text">Upload Image</span>
          )}
        </div>
        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleProfilePicChange} />
      </div>
      <div className="profile-details">
        <h2>My Profile</h2>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label>Nickname:</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Enter your nickname"
          />
        </div>
        <button onClick={handleUpdateProfile}>Update Profile</button>
      </div>
    </div>
  );
};

export default MyProfile;