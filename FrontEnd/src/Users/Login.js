import React, { useState } from 'react';
import './Login.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import profileImage from './Profile.png';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [role, setRole] = useState('user');

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  // Email validation
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(e.target.value)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  // Password validation
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{14,}$/;
    if (!passwordPattern.test(e.target.value)) {
      setPasswordError('Password should have at least 14 characters, at least one uppercase letter, at least one number, and at least one special character.');
    } else {
      setPasswordError('');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your authentication logic here
    if (!emailError && !passwordError) {
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Role:', role);
      
      // After successful login based on role
      if (role === 'mentor') {
        navigate('/mentorshome');
      } else if (role === 'admin') {
        navigate('/adminshome');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="profile-container">
        <div className="profile">
          <div className="profile-images-container">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="login-page-container">
            <h3 className="login">Login</h3>
            <div className="login-container">
              <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    value={email}
    onChange={handleEmailChange}
    required
  />
  <div className="error-message">{emailError}</div>
</div>
<div className="form-group">
  <label htmlFor="password">Password:</label>
  <input
    type="password"
    id="password"
    value={password}
    onChange={handlePasswordChange}
    required
  />
  <div className="error-message">{passwordError}</div>
</div>
                <button type="submit">Sign In</button>
              </form>
              <div className="toggle-container">
  <div
    className={`toggle-option ${role === 'user' ? 'active' : ''}`}
    onClick={() => handleRoleChange('user')}
  >
    <input
      type="radio"
      name="role"
      value="user"
      checked={role === 'user'}
      readOnly
    />
    <span>User</span>
  </div>
  <div
    className={`toggle-option ${role === 'admin' ? 'active' : ''}`}
    onClick={() => handleRoleChange('admin')}
  >
    <input
      type="radio"
      name="role"
      value="admin"
      checked={role === 'admin'}
      readOnly
    />
    <span>Admin</span>
  </div>
  <div
    className={`toggle-option ${role === 'mentor' ? 'active' : ''}`}
    onClick={() => handleRoleChange('mentor')}
  >
    <input
      type="radio"
      name="role"
      value="mentor"
      checked={role === 'mentor'}
      readOnly
    />
    <span>Mentor</span>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
