import ProfessorItem from "../ProfessorItem/ProfessorItem";
import "./ProfessorGrid.css";

export default function ProfessorGrid({ data }) {
  return (
    <div className="prof-grid">
      {data.map((item) => (
        <ProfessorItem key={item.id} item={item} />
      ))}
    </div>
  );
}