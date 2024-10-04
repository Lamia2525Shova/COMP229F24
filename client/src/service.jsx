import React from 'react';
import './App.css';

export default function Service() {
  return (
    <div className="serviceContainer">
      <h2 className="serviceTitle">Services I Offer</h2>
      <div className="serviceGrid">
        <div className="serviceCard">
          <h3 className="serviceHeading">Web Development</h3>
          <p className="serviceDescription">Building responsive websites using HTML, CSS, JavaScript, and React. From landing pages to dynamic web apps, I can help you bring your vision to life.</p>
        </div>

        <div className="serviceCard">
          <h3 className="serviceHeading">Software Development</h3>
          <p className="serviceDescription">Proficient in C#, Java, and Python for developing desktop applications or backend services. I am able to work with both object-oriented and functional programming styles.</p>
        </div>

        <div className="serviceCard">
          <h3 className="serviceHeading">AI Solutions</h3>
          <p className="serviceDescription">Currently studying AI and machine learning. I can help develop basic AI models and integrate AI solutions into applications for problem-solving and data analysis.</p>
        </div>

        <div className="serviceCard">
          <h3 className="serviceHeading">Database Management</h3>
          <p className="serviceDescription">Experience in working with databases like MongoDB and MySQL. I can help set up and manage databases for applications.</p>
        </div>
      </div>
    </div>
  );
}

    