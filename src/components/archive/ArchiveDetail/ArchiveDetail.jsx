import "./ArchiveDetail.css";

export default function ArchiveDetail({ item, artist }) {
  return (
    <div className="archive-detail">

      <h1 className="title">{item.title}</h1>

      <div className="top">

        {/* 대표 이미지 */}
        <div className="main-media">
          {item.mainMedia?.src ? (
            item.mainMedia.type === "image" ? (
              <img src={item.mainMedia.src} alt={item.title} />
            ) : (
              <iframe src={item.mainMedia.src} />
            )
          ) : (
            <div className="placeholder">이미지</div>
          )}
        </div>

        {/* 정보 */}
        <div className="info">
          <p className="author">{artist?.name || "이름"}</p>
          <p className="subject">{item.subject}</p>
          <p className="desc">{item.description}</p>
        </div>

      </div>

      {/* 하단 이미지 */}
      <div className="media-grid">
        {(item.media?.length ? item.media : [1, 2, 3]).map((img, i) => (
          <div className="media-box" key={i}>
            {typeof img === "string" ? <img src={img} /> : null}
          </div>
        ))}
      </div>

    </div>
  );
}