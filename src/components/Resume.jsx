import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import "./Resume.css";
import React from 'react';
import resume from "./../Data";


function Resume({education,skills,experience}) {
  return (
    <div className="container">
<Header/>
<Education />
<Experience/>
<Skills/>


   

      
    </div>
      
  );
}

export default Resume;
