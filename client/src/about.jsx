import './App.css';
import me from './img/me.jpg'

export default function About() {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">About Me</h1>
      <div className="aboutContent">
        <img src={me} alt="Lamia Alam Shova" className="profileImage" />
        <div className="aboutText">
          <h2>Lamia Alam Shova</h2>
          <p>Student, Centennial College</p>
          <p>Welcome to my portfolio! I am passionate about learning and creating impactful solutions through technology. Explore my projects and journey as a student.</p>
          <a href="./src/resume.pdf" className="resumeLink" target="_blank" rel="noopener noreferrer">Download My Resume</a>
        </div>
      </div>
    </div>
  );
}

    