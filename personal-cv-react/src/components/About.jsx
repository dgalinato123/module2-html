import profile from "../assets/profile.jpg";
function About() {
    return (
      <section className="card about-me-card">
        <h2>About Me</h2>
       <img src={profile} alt="Profile Picture" />
        <p>I am 19 years old and a student at the University of Southern Philippines.</p>
        <p>
          Email: <a href="mailto:dgalinato123@gmail.com">dgalinato123@gmail.com</a><br />
          GitHub: <a href="https://github.com/dgalinato123" target="_blank">github.com</a>
        </p>
      </section>
    );
  }
  
  export default About;