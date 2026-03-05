import { useState } from "react";

function Contact() {
  // Step 1: Add Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Added state for the textarea too!

  // Step 3: Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been received.`);
    
    // Optional: Clear the form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        {/* Step 2: Handle Inputs with value and onChange */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;