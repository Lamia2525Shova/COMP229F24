import React from 'react';
import './App.css'; 
import agent from './img/realestate.jpg'
import car from './img/car.jpeg'
import game from './img/game.jpg'
import cook from './img/culinary.jpg'
import cmfs from './img/cmfs.jpg'
import blood from './img/bloodbank.jpg'
import calculator from './img/calculator.jpg'

export default function Project() {
  return (
    <div className="projectContainer">
      <h2 className="projectTitle">My Projects</h2>
      <div className="projectGrid">

        <div className="projectCard">
          <img src={agent} alt="Real Estate Website" className="projectImage" />
          <h3>Web Development: Real Estate Website</h3>
          <p>Designed a dynamic and responsive website for a real estate agent, incorporating features like a homepage, contact form, and property gallery.</p>
        </div>

        <div className="projectCard">
          <img src={car} alt="Car Company Website" className="projectImage" />
          <h3>Web Development: Car Company Website</h3>
          <p>Developed a multipage website to showcase car models with prices, maps, and store locator integration.</p>
        </div>

        <div className="projectCard">
          <img src={game} alt="JavaScript Games" className="projectImage" />
          <h3>JavaScript Applications & Games</h3>
          <p>Created multiple applications and games (Bug Smasher, Snake Game, Online Chess, etc.) to demonstrate proficiency in user interface design.</p>
        </div>

        <div className="projectCard">
          <img src={cook} alt="Culinary App" className="projectImage" />
          <h3>Culinary Cuisine App</h3>
          <p>Collaborated on an app that allows users to explore recipes based on region, language, and interest. Integrated AI for personalized suggestions.</p>
        </div>

        <div className="projectCard">
          <img src={cmfs} alt="CFMS" className="projectImage" />
          <h3>Comprehensive Financial Management System (CFMS)</h3>
          <p>Developed features for tracking investments, budgeting recommendations, and alerts to support users' financial health.</p>
        </div>

        <div className="projectCard">
          <img src={blood} alt="Blood Bank Database" className="projectImage" />
          <h3>Blood Bank Database (SQL)</h3>
          <p>Designed and implemented a SQL-based database with ERD modeling for a blood bank.</p>
        </div>

        <div className="projectCard">
          <img src={calculator} alt="Calculator App" className="projectImage" />
          <h3>Calculator Web Application</h3>
          <p>Developed a fully functional calculator using C# and object-oriented programming principles.</p>
        </div>
        
      </div>
    </div>
  );
}


    