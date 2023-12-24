import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './DiaryView.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const DiaryView = () => {
  const location = useLocation();
  const diary = location.state ? location.state.diary : null;
  const [content, setContent] = useState('');

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSave = () => {
    console.log('Saving new content:', content);
    // TODO: Implement the actual save mechanism here
  };

  if (!diary) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="diary-page">
        <h1>{diary.title}</h1>
        <div className="diary-textarea-wrapper">
          <div className="date-container">
            <div className="date">{new Date(diary.date).toLocaleDateString('en-GB')}</div>
          </div>
          <div className="title-date-wrapper">
            <input
              className="diary-title"
              type="text"
              placeholder="Diary Title"
              value={diary.title}
              readOnly
            />
          </div>
          <textarea
            className="diary-textarea"
            value={content}
            onChange={handleContentChange}
            placeholder="Diary Content"
          />
          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DiaryView;
