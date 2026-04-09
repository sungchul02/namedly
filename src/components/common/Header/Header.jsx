import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>NAMEDLY</h1>

      <nav>
        <Link to="/professor">Professor</Link>
        <Link to="/artist">Artist</Link>
        <Link to="/archive">Archive</Link>
      </nav>
    </header>
  );
}