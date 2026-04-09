import "./ArtistItem.css";

export default function ArtistItem({ item, onHover, onLeave }) {
  return (
    <div
      className="artist-card"
      onMouseEnter={(e) => onHover(item, e)}
      onMouseLeave={onLeave}
    >
      <div className="artist-img" />
      <h3>{item.name}</h3>
    </div>
  );
}