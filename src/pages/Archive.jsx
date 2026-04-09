import { useState } from "react";
import Layout from "../components/common/Layout/Layout";
import ArchiveHeader from "../components/archive/ArchiveHeader/ArchiveHeader";
import ArchiveFilter from "../components/archive/ArchiveFilter/ArchiveFilter";
import ArchiveGrid from "../components/archive/ArchiveGrid/ArchiveGrid";
import data from "../data/archive.json";

export default function Archive() {
  const [selected, setSelected] = useState("전체");

  // ✅ subject 기준으로 변경
  const subjects = ["전체", ...new Set(data.map((item) => item.subject))];

  // ✅ 필터도 subject 기준
  const filteredData =
    selected === "전체"
      ? data
      : data.filter((item) => item.subject === selected);

  return (
    <Layout>
      <ArchiveHeader />

      {/* ✅ props 이름 통일 */}
      <ArchiveFilter
        subjects={subjects}
        selected={selected}
        onSelect={setSelected}
      />

      <ArchiveGrid data={filteredData} />
    </Layout>
  );
}