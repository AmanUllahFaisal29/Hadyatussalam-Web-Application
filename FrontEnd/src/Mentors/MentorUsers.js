import React, { useState } from 'react';
import MNavbar from './MNavbar';
import Header from '../Users/Header';
import './MentorUsers.css';
import Footer from '../Users/Footer';
import HabitsList from './HabitsList';

const MentorUsers = () => {
  // Hardcoded users
  const [users, setUsers] = useState([
    { id: 1, name: 'Almas Shah', email: 'user1@example.com', habits: [
      { title: 'Exercise', description: 'Do squats', frequency: '3 times per week', startdate: '2023-04-25', enddate: '2023-05-15' },
      { title: 'Meditation', description: 'Pray 5 times', frequency: 'Daily', startdate: '2023-04-25', enddate: '2023-05-10' },
    ] },
    { id: 2, name: 'Jamal Anwar', email: 'user2@example.com', habits: [
      { title: 'Reading', description: 'Codex Cracks', frequency: '5 times per week', startdate: '2023-04-25', enddate: '2023-05-05' },
    ] },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserChange = (event) => {
    const userId = event.target.value;
    const user = users.find(u => u.id === Number(userId));
    setSelectedUser(user);
  };

  const handleDeleteUser = () => {
    setUsers(users.filter(u => u.id !== selectedUser.id));
    setSelectedUser(null);
    console.log(`User with ID ${selectedUser.id} has been removed`);
  };

  return (
    <>
      <Header />
      <MNavbar />
      <div className="Mentors-top">
        <h1>Assigned Users</h1>
      </div>
      <div>
        <select onChange={handleUserChange} value={selectedUser?.id || ''}>
          <option value="">Select user...</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.id})
            </option>
          ))}
        </select>
        {selectedUser && <button className="custom-button" onClick={handleDeleteUser}>Delete Selected User</button>}

      </div>

      {selectedUser && (
        <div>
          <HabitsList habits={selectedUser.habits} />
        </div>
      )}
      <Footer />
    </>
  );
};

export default MentorUsers;
