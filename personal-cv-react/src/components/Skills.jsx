import { useState } from "react";

function Skills({skills}) {
  const [visible, setVisible] = useState(true); 

  return (
    <section className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h2>Skills</h2>
        <button onClick={() => setVisible(!visible)} style={{ width: 'auto' }}>
          {visible ? "Hide Skills" : "Show Skills"}
        </button>
      </div>
      
      {visible && (
        <div className="skills-grid" style={{ display: 'flex', gap: '40px' }}>
          <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Skills;