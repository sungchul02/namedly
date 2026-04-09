import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Professor from "./pages/Professor";
import Artist from "./pages/Artist";
import Archive from "./pages/Archive";
import ArtistDetail from "./pages/ArtistDetail";
import ArchiveDetail from "./pages/ArchiveDetail";
function App() {
  return (
    <BrowserRouter basename="/namedly">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/artist/:id" element={<ArtistDetail />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/archive/:id" element={<ArchiveDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;