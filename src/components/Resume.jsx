import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import "./Resume.css";
import React from 'react';
import Data from './../Data';

function Resume() {
  return (
    <div className="container">
      <Header/>
      <Education/>
      <Skills/>
      <Experience/>
      
    </div>
      
  );
}

export default Resume;
