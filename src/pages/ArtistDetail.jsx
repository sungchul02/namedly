import Layout from "../components/common/Layout/Layout";
import ArtistHeader from "../components/artist/ArtistHeader/ArtistHeader";
import ArtistProfile from "../components/artist/ArtistProfile/ArtistProfile";
import data from "../data/artists.json";

export default function ArtistDetail() {
  const artist = data[0];

  return (
    <Layout>
      <ArtistHeader />
      <ArtistProfile artist={artist} />
    </Layout>
  );
}