import { useParams } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import ArtistProfile from "../components/artist/ArtistProfile/ArtistProfile";
import data from "../data/artists.json";

export default function ArtistDetail() {
  const { id } = useParams();

  const artist = data.find((item) => item.id === Number(id));

  return (
    <Layout>
      <ArtistProfile artist={artist} />
    </Layout>
  );
}