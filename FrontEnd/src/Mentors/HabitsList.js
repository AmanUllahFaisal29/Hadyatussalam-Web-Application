import React from 'react';
import HabitTrackerProgressBar from '../Users/HabitTrackerProgressBar';

const HabitsList = ({ habits }) => {
  return (
    <div className="container">
    <div className="habits-list">
      {habits.map((habit, index) => (
        <div key={index} className="habit">
          <div className="habit-details">
            <div>
              <h3 className="habit-title">{habit.title}</h3>
              <h4 className="habit-description">{habit.description}</h4>
            </div>
            <div className="habit-dates-container">
              <div className="date-box">
                <p>{new Date(habit.startdate).toLocaleDateString('en-GB')}</p>
              </div>
              <div className="date-box">
                <p>{new Date(habit.enddate).toLocaleDateString('en-GB')}</p>
              </div>
              <div className="frequency-box">
                <p>{habit.frequency}</p>
              </div>
            </div>
          </div>
          <div className="habit-progress-container">
            <HabitTrackerProgressBar startDate={new Date(habit.startdate)} endDate={new Date(habit.enddate)} frequencyPerWeek={3} frequencyPerDay={2} />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default HabitsList;
