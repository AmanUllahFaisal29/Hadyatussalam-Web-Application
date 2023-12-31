import ANavbar from './ANavbar';
import React from 'react';
import Header from '../Users/Header';
import Banner from '../Users/Banner';
import logo from '../Users/Hadya.svg';
import image1 from '../Users/image1.jpg';
import image2 from '../Users/image2.jpg';
import image3 from '../Users/image3.png';
import image4 from '../Users/image4.png';
import image5 from '../Users/image5.png';
import image6 from '../Users/image6.png';
import image7 from '../Users/image7.png';
import image8 from '../Users/image8.png';
import image9 from '../Users/image9.png';
import image10 from '../Users/image10.png';
import image11 from '../Users/image11.png';
import './AHome.css';
import Footer from '../Users/Footer';

function AHome() {
  return (
    <>
      <Header logo={logo} />
      <ANavbar />
      <Banner images={[image1, image2]} />
      <div className="banner-line"></div>
      <div className="content-container">
        <img src={image3} alt="Logo" className="content-logo" />
        <p className="content-paragraph">Hadyatussalam is an innovative Islamic productivity web app designed to help Muslims lead productive and fulfilling lives while staying true to their values and beliefs. Our platform is built on the belief that productivity and faith go hand in hand, and we are committed to providing a range of tools and resources to help Muslims live their best lives. </p>
        <div className="content-icons">
          <img src={image4} alt="Icon 1" className="content-icon" />
          <img src={image5} alt="Icon 2" className="content-icon" />
          <img src={image6} alt="Icon 3" className="content-icon" />
        </div>
        <p className="content-paragraph">At Hadyatussalam, our mission is to empower Muslims around the world to live their best lives by providing them with the tools and resources they need to strengthen their faith, develop positive habits, and manage their daily lives in accordance with Islamic principles.</p>
        <div className="content-icons">
          <img src={image7} alt="Icon 1" className="content-icon" />
          <img src={image8} alt="Icon 2" className="content-icon" />
          <img src={image9} alt="Icon 3" className="content-icon" />
          <img src={image10} alt="Icon 4" className="content-icon" />
          <img src={image11} alt="Icon 5" className="content-icon" />
        </div>
        <p className="content-paragraph">We provide personalized diaries and to-do lists, an Islamic finance tracker, mentorship opportunities, and an online Quran reader with a specific verse locator to help Muslims achieve their goals and lead fulfilling lives in accordance with Islamic principles.</p>
      </div>
      <Footer />
    </>
  );
}

export default AHome;
