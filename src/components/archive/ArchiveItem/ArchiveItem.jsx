import "./ArchiveItem.css";
import { useNavigate } from "react-router-dom";

export default function ArchiveItem({ item }) {
  const navigate = useNavigate();
  const BASE = import.meta.env.BASE_URL; // 🔥 추가

  return (
    <div
      className="archive-item"
      onClick={() => navigate(`/archive/${item.id}`)}
    >
      {/* 썸네일 */}
      <div className="thumb">
        {item.thumbnail ? (
          <img src={BASE + item.thumbnail} alt={item.title} />
        ) : null}
      </div>

      {/* 정보 */}
      <div className="info">
        <h4>{item.title}</h4>
        <p>{item.subject}</p>
      </div>
    </div>
  );
}