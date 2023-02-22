import "./Header.scss";
import NavBar from "../NavBar/NavBar";
function Header() {
  return (
    <header className="header">
      <NavBar />
      <h1 className="header_title">WE ARE CREATIVES</h1>
      <div className="arrow_down">
        <a href="#about">
          <div className="arrow_down" style={{ opacity: 0 }}></div>
        </a>
      </div>
    </header>
  );
}

export default Header;
