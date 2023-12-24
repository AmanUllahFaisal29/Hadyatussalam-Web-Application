import React from 'react';
import './App.css';
import Profile from './Users/Profile';
import Home from './Users/Home';
import MHome from './Mentors/MHome';
import AHome from './Admin/AHome';
import DiaryPage from './Users/DiaryPage';
import Login from './Users/Login';
import Community from './Users/Community';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllHabits from './Users/AllHabits';
import HabitsPage from './Users/HabitsPage';
import Logout from './Users/Logout';
import AllDiaries from './Users/AllDiaries';
import Signup from './Users/Signup';
import AllTodoLists from './Users/AllTodolist';
import Todolist from './Users/Todolist';
import Budget from './Users/Budget';
import MentorUsers from './Mentors/MentorUsers';
import DiaryView from './Users/DiaryView';
import PrayerTimes from './Users/PrayerTimes';
import QuranVerse from './Users/QuranVerse';
import Surah from './Users/Surah';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mentorshome" element={<MHome />} />
          <Route path="/adminshome" element={<AHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/create-lists" element={<Todolist />} />
          <Route path="/budgets" element={<Budget />} />
          <Route path="/todolists" element={<AllTodoLists />} />
          <Route path="/diaries" element={<AllDiaries />} />
          <Route path="/habits" element={<AllHabits />} />
          <Route path="/create-habit" element={<HabitsPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mentors" element={<MentorUsers />} />
          <Route path="/viewdiary" element={<DiaryView />} />
          <Route path="/prayers" element={<PrayerTimes />} />
          <Route path="/quran" element={<QuranVerse />} />
          <Route path="/Surah" element={<Surah />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
