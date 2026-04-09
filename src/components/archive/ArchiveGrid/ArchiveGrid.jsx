import ArchiveItem from "../ArchiveItem/ArchiveItem";
import "./ArchiveGrid.css";

export default function ArchiveGrid({ data }) {
  return (
    <div className="archive-grid">
      {data.map((item) => (
        <ArchiveItem key={item.id} item={item} />
      ))}
    </div>
  );
}