// AllDiaries.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllDiaries.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const AllDiaries = () => {
  const hardcodedDiaries = [
    { title: 'Diary 1', date: '2023-04-25'},
    { title: 'Diary 2', date: '2023-04-25'},
    { title: 'Diary 3', date: '2023-04-25'}
  ];

  const [diaries, setDiaries] = useState(hardcodedDiaries);
  const navigate = useNavigate();

  const handleCreateDiaryClick = () => {
    navigate('/diary');
  };

  // Sort diaries by date in descending order (latest first)
  const sortedDiaries = diaries.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Header />
      <Navbar />
      <div className="Diaries-top">
        <h1>My Diary Tracker</h1>
      </div>
      <div className="container">
        <div className="diaries-list">
          <div className="header-row">
            <h2>View all your Diaries</h2>
            <div className="create-diary-button-container">
              <button className="create-diary-button" onClick={handleCreateDiaryClick}>+</button>
            </div>
          </div>
          {sortedDiaries.map((diary, index) => (
            <Link 
              key={index} 
              to={{ 
                pathname: '/viewdiary', 
                state: { diary } 
              }}
            >
              <div className="diary-details">
                <h3 className="diaries-title">{diary.title}</h3>
                <p className="diary-date">{new Date(diary.date).toLocaleDateString('en-GB')}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllDiaries;
