import "./ArchiveItem.css";

export default function ArchiveItem({ item }) {
  return (
    <div className="archive-item">
      <div className="thumb"></div>

      <div className="info">
        <h4>{item.title}</h4>
        <p>{item.category}</p>
        <span>{item.author}</span>
      </div>
    </div>
  );
}