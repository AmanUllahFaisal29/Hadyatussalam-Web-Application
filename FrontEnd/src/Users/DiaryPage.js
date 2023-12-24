import React, { useState } from 'react';
import './DiaryPage.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const DiaryPage = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <Header />
      <Navbar />
      <div className="diary-page">
        <h1>My Hadya Diary</h1>
        <div className="diary-textarea-wrapper">
          <div className="date-container"> {/* Move the date container outside of the title-date-wrapper */}
            <div className="date">{currentDate}</div>
          </div>
          <div className="title-date-wrapper">
            <input
              className="diary-title"
              type="text"
              placeholder="Diary Title"
            />
          </div>
          <textarea
            className="diary-textarea"
            value={text}
            onChange={handleChange}
            placeholder="Write your thoughts here..."
          />
          <button className="save-button">Save</button>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default DiaryPage;
