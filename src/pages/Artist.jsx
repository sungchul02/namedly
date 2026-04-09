import { useState, useRef, useEffect } from "react";
import Layout from "../components/common/Layout/Layout";
import ArtistHeader from "../components/artist/ArtistHeader/ArtistHeader";
import ArtistFilter from "../components/artist/ArtistFilter/ArtistFilter";
import ArtistGrid from "../components/artist/ArtistGrid/ArtistGrid";
import ArtistProfile from "../components/artist/ArtistProfile/ArtistProfile";
import data from "../data/artists.json";

export default function Artist() {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [selected, setSelected] = useState("전체");

  const timeoutRef = useRef(null);

  // ✅ subject 기준으로 변경
  const subjects = ["전체", ...new Set(data.map((i) => i.subject))];

  // ✅ 필터도 subject 기준
  const filteredData =
    selected === "전체"
      ? data
      : data.filter((i) => i.subject === selected);

  const handleHover = (item, e) => {
    clearTimeout(timeoutRef.current);

    const rect = e.currentTarget.getBoundingClientRect();

    let x = rect.right + 10;
    let y = rect.top;

    if (x + 420 > window.innerWidth) {
      x = rect.left - 430;
    }

    setHovered(item);
    setPos({ x, y });
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHovered(null);
    }, 250);
  };

  useEffect(() => {
    return () => {
      setHovered(null); // 페이지 이동 시 hover 제거
    };
  }, []);

  return (
    <Layout>
      <ArtistHeader />

      {/* ✅ props 이름 통일 */}
      <ArtistFilter
        subjects={subjects}
        selected={selected}
        onSelect={setSelected}
      />

      <div className="artist-wrapper">
        <ArtistGrid
          data={filteredData}
          onHover={handleHover}
          onLeave={handleLeave}
        />

        {hovered && (
          <ArtistProfile
            artist={hovered}
            preview
            style={{ top: pos.y, left: pos.x }}
            onMouseEnter={() => clearTimeout(timeoutRef.current)}
            onMouseLeave={handleLeave}
          />
        )}
      </div>
    </Layout>
  );
}