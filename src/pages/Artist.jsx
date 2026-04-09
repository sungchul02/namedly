import { useState, useRef } from "react";
import Layout from "../components/common/Layout/Layout";
import ArtistHeader from "../components/artist/ArtistHeader/ArtistHeader";
import ArtistGrid from "../components/artist/ArtistGrid/ArtistGrid";
import ArtistProfile from "../components/artist/ArtistProfile/ArtistProfile";
import data from "../data/artists.json";

export default function Artist() {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const timeoutRef = useRef(null);

  const handleHover = (item, e) => {
  console.log("🔥 hover 감지됨");   // 이거 찍히는지 확인

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

  
  return (
    <Layout>
      <ArtistHeader />

      <div className="artist-wrapper">
        <ArtistGrid
            data={data}
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