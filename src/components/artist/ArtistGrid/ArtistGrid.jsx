import ArtistItem from "../ArtistItem/ArtistItem";
import "./ArtistGrid.css";

export default function ArtistGrid({ data, onHover, onLeave }) {
  return (
    <div className="artist-grid">
      {data.map((item) => (
        <ArtistItem
          key={item.id}
          item={item}
          onHover={onHover}   // 🔥 반드시 추가
          onLeave={onLeave}   // 🔥 반드시 추가
        />
      ))}
    </div>
  );
}