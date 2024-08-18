import React, { useState } from 'react';
import ProfileView from './Component/ProfileView.jsx';
import ProfileEdit from './Component/ProfileEdit.jsx';
import SearchPage from './Component/SearchPage';

// Sample profile data
const initialProfiles = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    description: 'Content Creator specializing in tech reviews.',
    languages: 'English, Hindi',
    education: 'B.Sc. in Computer Science',
    specialization: 'Tech Reviews, Gadgets',
    twitter: 'https://twitter.com/johndoe',
    instagram: 'https://instagram.com/johndoe'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    description: 'Lifestyle blogger and travel enthusiast.',
    languages: 'English',
    education: 'B.A. in Media Studies',
    specialization: 'Lifestyle, Travel',
    twitter: 'https://twitter.com/janesmith',
    instagram: 'https://instagram.com/janesmith'
  },
  {
    id: 3,
    name: 'Alex Johnson',
    email: 'alexjohnson@example.com',
    description: 'Fitness expert with a passion for healthy living.',
    languages: 'English, Spanish',
    education: 'M.Sc. in Kinesiology',
    specialization: 'Fitness, Nutrition',
    twitter: 'https://twitter.com/alexjohnson',
    instagram: 'https://instagram.com/alexjohnson'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emilydavis@example.com',
    description: 'Fashion blogger and style consultant.',
    languages: 'English, French',
    education: 'B.A. in Fashion Design',
    specialization: 'Fashion, Beauty',
    twitter: 'https://twitter.com/emilydavis',
    instagram: 'https://instagram.com/emilydavis'
  },
  {
    id: 5,
    name: 'Michael Brown',
    email: 'michaelbrown@example.com',
    description: 'Tech enthusiast and software developer.',
    languages: 'English, German',
    education: 'B.Sc. in Software Engineering',
    specialization: 'Software Development, Gadgets',
    twitter: 'https://twitter.com/michaelbrown',
    instagram: 'https://instagram.com/michaelbrown'
  }
];

const App = () => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  const handleProfileUpdate = (updatedProfile) => {
    setProfiles(profiles.map(profile =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    ));
    setSelectedProfile(updatedProfile);
  };

  return (
    <div className="app">
      <SearchPage profiles={profiles} onProfileSelect={handleProfileSelect} />
      <div className="profile-content">
        {selectedProfile && (
          <>
            <ProfileView profile={selectedProfile} />
            <ProfileEdit profile={selectedProfile} setProfile={handleProfileUpdate} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
