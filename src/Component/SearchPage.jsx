import React, { useState } from 'react';
import './SearchPage.css';

const SearchPage = ({ profiles, onProfileSelect }) => {
  const [filters, setFilters] = useState({
    language: '',
    education: '',
    specialization: '',
    searchTerm: ''
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProfiles = profiles.filter(profile => {
    return (
      (filters.language === '' || profile.languages.includes(filters.language)) &&
      (filters.education === '' || profile.education.includes(filters.education)) &&
      (filters.specialization === '' || profile.specialization.includes(filters.specialization)) &&
      (filters.searchTerm === '' || profile.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      profile.description.toLowerCase().includes(filters.searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="search-page">
      <div className="filters">
        <label>
          Language:
          <select name="language" value={filters.language} onChange={handleFilterChange}>
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </label>
        <label>
          Education:
          <select name="education" value={filters.education} onChange={handleFilterChange}>
            <option value="">Select Education</option>
            <option value="B.Sc.">B.Sc.</option>
            <option value="M.Sc.">M.Sc.</option>
            <option value="B.A.">B.A.</option>
            <option value="M.A.">M.A.</option>
          </select>
        </label>
        <label>
          Specialization:
          <select name="specialization" value={filters.specialization} onChange={handleFilterChange}>
            <option value="">Select Specialization</option>
            <option value="Tech Reviews">Tech Reviews</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
            <option value="Fitness">Fitness</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Fashion">Fashion</option>
            <option value="Beauty">Beauty</option>
          </select>
        </label>
        <label>
          Search Term:
          <input
            type="text"
            name="searchTerm"
            value={filters.searchTerm}
            onChange={handleFilterChange}
            placeholder="Search by name or description"
          />
        </label>
      </div>
      <div className="search-results">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map(profile => (
            <div
              key={profile.id}
              className="profile-item"
              onClick={() => onProfileSelect(profile)}
            >
              <h2>{profile.name}</h2>
              <p>{profile.description}</p>
            </div>
          ))
        ) : (
          <p>No profiles found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
