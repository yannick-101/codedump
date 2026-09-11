import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <main>
      <div id="sidebar">
        <div id="socials">
          <button className="social-button">y</button>
          <button className="social-button">y</button>
          <button className="social-button">y</button>
          <button className="social-button">y</button>
        </div> 
        <ul>
          <Link to="/Kartenspiele">
            <button className="sidebar-button">Kartenspiele</button>
          </Link>
          <Link to="/Schachbrett">
            <button className="sidebar-button">Schachbrett</button>
          </Link>
          <Link to="/SchiffeVersenken">
            <button className="sidebar-button">Schiffe versenken</button>
          </Link>
        </ul>
      </div>
      <div>
        <button
          className="sidebar-control"
          onClick={toggleSidebar}
        >
          toggle Sidebar
        </button>
        Willkommen!
        This is the main page
      </div>
    </main>
  );
}

function toggleSidebar() {
  const a = getComputedStyle(document.getElementById("sidebar")).display;
          if (a == "hidden") {
            document.getElementById("sidebar").style.display = "block";
            console.log("kdsjkf")
          }
          if (a != "hidden") {
            document.getElementById("sidebar").style.display = "hidden";
            console.log("fkjndskf")
          }
        }

export default App;
