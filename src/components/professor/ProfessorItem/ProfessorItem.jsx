import "./ProfessorItem.css";

export default function ProfessorItem({ item }) {
  return (
    <div className="prof-card">
      <div className="prof-image">
        {item.image ? (
          <img src={item.image} alt="" />
        ) : (
          <div className="placeholder" />
        )}
      </div>

      <h3>{item.name}</h3>
      <p className="category">{item.category}</p>
      <p className="desc">{item.description}</p>
    </div>
  );
}