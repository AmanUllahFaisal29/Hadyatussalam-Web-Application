// AllTodoLists.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllTodolist.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const AllTodoLists = () => {
  const hardcodedTodoLists = [
    { title: 'Todo List 1', date: '2023-04-25' },
    { title: 'Todo List 2', date: '2023-04-25' },
    { title: 'Todo List 3', date: '2023-04-25' }
  ];

  const [todoLists, setTodoLists] = useState(hardcodedTodoLists);
  const navigate = useNavigate();

  const handleCreateTodoListClick = () => {
    navigate('/create-lists');
  };

  // Sort todoLists by date in descending order (latest first)
  const sortedTodoLists = todoLists.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Header />
      <Navbar />
      <h1 class="Todolist-top">My To-Do Lists</h1>
      <div className="container">
        <div className="todo-lists">
          <div className="header-row">
            <h2>View all your Todo Lists</h2>
            <div className="create-todolist-button-container">
              <button className="create-todolist-button" onClick={handleCreateTodoListClick}>+</button>
            </div>
          </div>
          {sortedTodoLists.map((todoList, index) => (
            <div key={index} className="todo-list">
              <div className="todo-list-details">
                <h3 className="todo-list-title">{todoList.title}</h3>
                <p className="todo-list-date">{new Date(todoList.date).toLocaleDateString('en-GB')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllTodoLists;
