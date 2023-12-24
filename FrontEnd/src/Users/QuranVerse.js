import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuranVerse.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

function QuranVerse() {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);

  useEffect(() => {
    axios.get('http://api.alquran.cloud/v1/surah')
      .then(response => {
        if (response.data.code === 200) {
          setSurahs(response.data.data);
        } else {
          console.error('Error fetching surahs:', response.data);
        }
      })
      .catch(err => {
        console.error('Error fetching surahs:', err);
      });
  }, []);

  const handleSurahSelect = async (surah) => {
    setSelectedSurah(surah);
    
    try {
      const response = await axios.get(`http://api.alquran.cloud/v1/surah/${surah.number}`);
      if (response.data.code === 200) {
        setSelectedSurah((prevSurah) => ({
          ...prevSurah,
          ayahs: response.data.data.ayahs,
        }));
      } else {
        console.error('Error fetching Quran verses:', response.data);
      }
    } catch (error) {
      console.error('Error fetching Quran verses:', error);
    }
  };

  const renderSurahText = () => {
    if (!selectedSurah || !selectedSurah.ayahs) return null;

    return (
      <div className="QuranVerseContent">
        <h2>{selectedSurah.englishName} ({selectedSurah.name})</h2>
        {selectedSurah.ayahs.map(ayah => (
          <div key={ayah.number}>
            <p className="QuranVerseText">{ayah.text}</p>
            <p className="QuranVerseTranslation">{ayah.translation}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="PrayerTimesTop"> 
        <h1>E-Quran</h1>
      </div>
      <div className="QuranVerse">
        <div className="SurahList">
          <h2>Select a Surah</h2>
          <ul>
            {surahs.map(surah => (
              <li key={surah.number} onClick={() => handleSurahSelect(surah)}>
                {surah.englishName} ({surah.name})
              </li>
            ))}
          </ul>
        </div>
        {renderSurahText()}
      </div>
      <Footer />
    </>
  );
}

export default QuranVerse;
