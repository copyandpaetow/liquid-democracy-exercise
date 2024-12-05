import { ProjectList } from "../../features/projects";
import { Layout } from "../../layout/main";
import "./home.css";

//the design had no h1 headline so I added one. In my opinion the "project overview" doesnt work for this

export const Home = () => {
  return (
    <Layout>
      <h1>Current Projects</h1>
      <ProjectList></ProjectList>
    </Layout>
  );
};
