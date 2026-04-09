import ArtistItem from "../ArtistItem/ArtistItem";
import "./ArtistGrid.css";

export default function ArtistGrid({ data, onHover, onLeave }) {
  return (
    <div className="artist-grid">
      {data.map((item) => (
        <ArtistItem
          key={item.id}
          item={item}
          onHover={onHover}     // 🔥 전달
          onLeave={onLeave}     // 🔥 전달
        />
      ))}
    </div>
  );
}