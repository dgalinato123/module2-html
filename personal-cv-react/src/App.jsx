import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false); 
  const skills = [
    "HTML", 
    "CSS", 
    "JavaScript", 
    "Web Development (Frontend & Backend)", 
    "React"
  ];

  // Map each row of your table to an object
  const education = [
    {
      program: "College",
      institution: "USTP - CDO Campus",
      year: "2028"
    },
    {
      program: "Senior High School",
      institution: "CDONHS - SHS",
      year: "2024"
    },
    {
      program: "Junior High School",
      institution: "CDONHS - JHS",
      year: "2022"
    },
    {
      program: "Elementary",
      institution: "Macasandig Elementary",
      year: "2018"
    },
    {
      program: "Kindergarten",
      institution: "Mandumol Day Care Center",
      year: "2012"
    }
  ];
      
  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <About />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact />
      </main>
      <footer className="footer-card">
        <p>&copy; 2026 Denver Galinato. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;