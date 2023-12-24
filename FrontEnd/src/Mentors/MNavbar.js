
import React from 'react';
import './MNavbar.css';
import { Link } from 'react-router-dom';

function MNavbar() {
  return (
    <div className="Mnavbar">
      <Link to="/mentorshome">
        <button>HOME</button>
      </Link>
      <Link to="/mentors">
        <button>USERS</button>
      </Link>
      <Link to="/community">
        <button>COMMUNITY</button>
      </Link>
    </div>
  );
}

export default MNavbar;
