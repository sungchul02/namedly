import Layout from "../components/common/Layout/Layout";
import ArchiveHeader from "../components/archive/ArchiveHeader/ArchiveHeader";
import ArchiveFilter from "../components/archive/ArchiveFilter/ArchiveFilter";
import ArchiveGrid from "../components/archive/ArchiveGrid/ArchiveGrid";
import data from "../data/archive.json";

export default function Archive() {
  return (
    <Layout>
      <ArchiveHeader />
      <ArchiveFilter />
      <ArchiveGrid data={data} />
    </Layout>
  );
}