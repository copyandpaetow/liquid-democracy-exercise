import { ProjectList } from "../../features/projects"
import { Layout } from "../../layout/main"
import "./home.css"


export const Home = () => {

    return <Layout>
        <h1>Current Projects</h1>
        <ProjectList></ProjectList>
    </Layout>
}