import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-inner">
        <h2 className="hero-title">“ 어쩌구 저쩌구 ”</h2>

        <div className="hero-buttons">
          <button onClick={() => navigate("/archive")}>
            전시물 보러가기
          </button>
          <button onClick={() => navigate("/artist")}>
            학생들 보러가기
          </button>
        </div>
      </div>
    </section>
  );
}