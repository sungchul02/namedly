import "./ArtistFilter.css";

export default function ArtistFilter({ categories, selected, onSelect }) {
  return (
    <div className="artist-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? "active" : ""}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}