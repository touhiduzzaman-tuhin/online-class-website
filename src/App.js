import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Course from './components/Course/Course';

function App() {
  return (
    <div style={{fontFamily: 'Roboto'}}>
       <Header></Header>
       <Course></Course>
    </div>
  );
}

export default App;
