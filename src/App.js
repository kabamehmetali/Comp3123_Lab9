// App.js
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Initialize state with student information
  const [student] = useState({
    studentID: '101453763',
    name: 'Mehmet Ali KABA',
    college: 'George Brown College, Toronto'
  });

  return (
    <div className="App ">
      <header className="App-header ">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="card-body">
          <h1>Welcome to Fullstack Development - I</h1>
          <h2>React JS Programming Week09 Lab Exercise</h2>

          <div className="student-info">
            <p><strong> {student.studentID}</strong></p>
            <p><strong> {student.name}</strong></p>
            <p><strong>{student.college}</strong> </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
