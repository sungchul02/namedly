import "./ArchiveFilter.css";

export default function ArchiveFilter({ subjects, selected, onSelect }) {
  return (
    <div className="archive-filter">
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