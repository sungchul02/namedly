import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <header className="header">
      {/* 로고 클릭 → 홈 */}
      <h1 className="logo" onClick={() => navigate("/")}>
        NAMEDLY
      </h1>

      <nav className="nav">
        <button
          className={isActive("/professor") ? "active" : ""}
          onClick={() => navigate("/professor")}
        >
          Professor
        </button>

        <button
          className={isActive("/artist") ? "active" : ""}
          onClick={() => navigate("/artist")}
        >
          Artist
        </button>

        <button
          className={isActive("/archive") ? "active" : ""}
          onClick={() => navigate("/archive")}
        >
          Archive
        </button>
      </nav>
    </header>
  );
}