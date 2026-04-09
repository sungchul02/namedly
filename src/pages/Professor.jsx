import Layout from "../components/common/Layout/Layout";
import ProfessorHeader from "../components/professor/ProfessorHeader/ProfessorHeader";
import ProfessorGrid from "../components/professor/ProfessorGrid/ProfessorGrid";
import data from "../data/professors.json";

export default function Professor() {
  return (
    <Layout>
      <ProfessorHeader />
      <ProfessorGrid data={data} />
    </Layout>
  );
}