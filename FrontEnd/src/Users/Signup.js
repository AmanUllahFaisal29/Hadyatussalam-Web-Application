import { useState } from 'react';
import './Signup.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import profileImage from './Profile.png';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numberError, setNumberError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (e.target.value.length < 4 || e.target.value.length > 24) {
      setNameError('Name should be between 4 and 24 characters.');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(e.target.value)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);

    if (e.target.value.length !== 11) {
      setNumberError('Number should be exactly 11 digits.');
    } else {
      setNumberError('');
    }
  };

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

    if (!nameError && !passwordError && !emailError && !numberError) {
      console.log('Name:', name);
      console.log('Password:', password);
      console.log('Email:', email);
      console.log('Number:', number);
    }
  };


  return (
    <>
      <Header />
      <Navbar />
      <div className="profile-container">
        <div className="profile">
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="signup-page-container">
            <h3 className="signup">Sign Up</h3>
            <div className="signup-container">
              <form onSubmit={handleSubmit} className="signup-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
        <div className="error-message">{nameError}</div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        <div className="error-message">{emailError}</div>
      </div>
      <div className="form-group">
        <label htmlFor="number">Number:</label>
        <input type="tel" id="number" value={number} onChange={handleNumberChange} required />
        <div className="error-message">{numberError}</div>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        <div className="error-message">{passwordError}</div>
      </div>
      <button type="submit">SignUp</button>
      </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;