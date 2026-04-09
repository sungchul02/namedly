import "./ArtistProfile.css";

export default function ArtistProfile({ artist, preview, style, ...events }) {
  if (!artist) return null;

  return (
    <div
      className={`artist-profile ${preview ? "preview" : ""}`}
      style={style}         // 🔥 이거 반드시 있어야 함
      {...events}           // 🔥 hover 유지 핵심
    >
      <div className="profile-left">
        <div className="profile-img">사진</div>
      </div>

      <div className="profile-right">
        <h2>{artist.name}</h2>
        <p>{artist.category}</p>
        <p>{artist.description}</p>

        <div className="works">
          <div className="work-box" />
          <div className="work-box" />
          <div className="work-box" />
        </div>
      </div>
    </div>
  );
}