import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false); 

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer-card">
        <p>&copy; 2026 Denver Galinato. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;