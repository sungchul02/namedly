import "./ArtistFilter.css";

export default function ArtistFilter({ subjects, selected, onSelect }) {
  return (
    <div className="artist-filter">
      {subjects.map((subject) => (
        <button
          key={subject}
          className={selected === subject ? "active" : ""}
          onClick={() => onSelect(subject)}
        >
          {subject}
        </button>
      ))}
    </div>
  );
}