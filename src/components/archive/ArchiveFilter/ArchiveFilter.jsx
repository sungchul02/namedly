import "./ArchiveFilter.css";

export default function ArchiveFilter() {
  const filters = ["과목명", "과목명", "과목명", "과목명", "과목명"];

  return (
    <div className="archive-filter">
      {filters.map((f, i) => (
        <button key={i}>{f}</button>
      ))}
    </div>
  );
}