import "./ArtistItem.css";

export default function ArtistItem({ item, onHover, onLeave }) {
  return (
    <div
      className="artist-card"
      onMouseEnter={(e) => onHover && onHover(item, e)}
      onMouseLeave={() => onLeave && onLeave()}
    >
      <div className="artist-img" />

      <h3>{item.name}</h3>
      <p className="subject">{item.subject}</p>
      <p className="desc">{item.description}</p> {/* 🔥 추가 */}
    </div>
  );
}