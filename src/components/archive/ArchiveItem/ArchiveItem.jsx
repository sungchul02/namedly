import "./ArchiveItem.css";
import { useNavigate } from "react-router-dom";

export default function ArchiveItem({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className="archive-item"
      onClick={() => navigate(`/archive/${item.id}`)}
    >
      <div className="thumb"></div>

      <div className="info">
        <h4>{item.title}</h4>
        <p>{item.subject}</p>
      </div>
    </div>
  );
}