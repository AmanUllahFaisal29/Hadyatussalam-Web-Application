
import React from 'react';
import './ANavbar.css';
import { Link } from 'react-router-dom';

function ANavbar() {
  return (
    <div className="Mnavbar">
      <Link to="/adminshome">
        <button>HOME</button>
      </Link>
        <button>USER PROFILES</button>
        <button>MENTOR PROFILES</button>
      <Link to="/community">
        <button>COMMUNITY</button>
      </Link>

    </div>
  );
}

export default ANavbar;
