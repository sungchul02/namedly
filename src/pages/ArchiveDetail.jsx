import { useParams } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import ArchiveDetail from "../components/archive/ArchiveDetail/ArchiveDetail";
import data from "../data/archive.json";
import artists from "../data/artists.json";

export default function ArchiveDetailPage() {
  const { id } = useParams();

  const item = data.find((v) => v.id === Number(id));
  const artist = artists.find((a) => a.id === item?.artistId);

  if (!item) return <div>없음</div>;

  return (
    <Layout>
      <ArchiveDetail item={item} artist={artist} />
    </Layout>
  );
}