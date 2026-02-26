function Header({ darkMode, setDarkMode }) {
  return (
    <header className="card header-card">
      <h1>Denver Galinato</h1>
      <label className="theme-toggle">
        <input 
          type="checkbox" 
          checked={darkMode} 
          onChange={() => setDarkMode(!darkMode)} 
        />
        <span className="slider round">
          <div className="background"></div>
          <div className="star"></div>
          <div className="star"></div>
        </span>
      </label>
      <p>IT Student | Web Systems and Development</p>
    </header>
  );
}

export default Header;