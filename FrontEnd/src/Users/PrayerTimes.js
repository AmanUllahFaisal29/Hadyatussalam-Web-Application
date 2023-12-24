import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PrayerTimes.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    // Current date
    const date = new Date();
    const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

 
    const latitude = 24.8607;
    const longitude = 67.0011;


    axios.get(`http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2`)
      .then(response => {
        if (response.data.code === 200) {
          // Get today's prayer times
          const todayPrayerTimes = response.data.data[date.getDate() - 1].timings;
          setPrayerTimes(todayPrayerTimes);
        } else {
          console.error('Error fetching prayer times:', response.data);
        }
      })
      .catch(err => {
        console.error('Error fetching prayer times:', err);
      });
  }, []);

  const date = new Date();
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return (
    <>

      <Header />
      <Navbar />
      <div className="PrayerTimesTop"> 
      <h1>Prayer Times</h1>
      </div>
    <div className="PrayerTimes">
      {prayerTimes ? (
        <>
        <ul>
          <li>Fajr: {prayerTimes.Fajr}</li>
          <li>Sunrise: {prayerTimes.Sunrise}</li>
          <li>Dhuhr: {prayerTimes.Dhuhr}</li>
          <li>Asr: {prayerTimes.Asr}</li>
          <li>Maghrib: {prayerTimes.Maghrib}</li>
          <li>Isha: {prayerTimes.Isha}</li>
        </ul>
        <div className="PrayerTimesInfo">
            <p>Date: {formattedDate}</p>
            <p>Location: Karachi</p>
          </div>
          </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <Footer />
    </>
  );
}

export default PrayerTimes;
