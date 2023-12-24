import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import './QuranVerse.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

function Surah() {
  const [selectedSurah, setSelectedSurah] = useState(null);

  useEffect(() => {
    // Fetch the selected surah data using the selectedSurahId from the URL params
    const surahId = window.location.pathname.split('/').pop();
    axios
      .get(`http://api.alquran.cloud/v1/surah/${surahId}`)
      .then((response) => {
        if (response.data.code === 200) {
          setSelectedSurah(response.data.data);
        } else {
          console.error('Error fetching surah:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching surah:', error);
      });
  }, []);

  return (
    <div className="QuranVerseContent">
      {selectedSurah ? (
        <>
          <h2>
            {selectedSurah.englishName} ({selectedSurah.name})
          </h2>
          {selectedSurah.ayahs.map((ayah) => (
            <div key={ayah.number}>
              <p className="QuranVerseText">{ayah.text}</p>
              <p className="QuranVerseTranslation">{ayah.translation}</p>
            </div>
          ))}
        </>
      ) : (
        <p>Loading surah...</p>
      )}
    </div>
  );
}

function QuranVerse() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    axios
      .get('http://api.alquran.cloud/v1/surah')
      .then((response) => {
        if (response.data.code === 200) {
          setSurahs(response.data.data);
        } else {
          console.error('Error fetching surahs:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching surahs:', error);
      });
  }, []);

  return (
    <Router>
      <Header />
      <Navbar />
      <div className="PrayerTimesTop">
        <h1>E-Quran</h1>
      </div>
      <Routes>
        <Route path="/" element={<h1 className="QuranVerseTitle">Quran Verse</h1>} />
        <Route path="/Surah" element={<div className="SurahList">
          <h2>Select a Surah</h2>
          <ul>
            {surahs.map((surah) => (
              <li key={surah.number}>
                <Link to={`/Surah/${surah.number}`}>{surah.englishName} ({surah.name})</Link>
              </li>
            ))}
          </ul>
        </div>} />
        <Route path="/Surah/:surahId" element={<Surah />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default QuranVerse;
