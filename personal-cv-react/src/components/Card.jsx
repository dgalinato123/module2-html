import profile from "../assets/profile.jpg";
function Card({ title, children }) {
    return (
        <section className="card about-me-card">
        <h2>{title}</h2>
       <img src={profile} alt="Profile Picture" />
       {children}
      </section>
    );
    }
    export default Card;
    