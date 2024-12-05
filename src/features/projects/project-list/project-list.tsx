import { useState } from "react";
import { useResults } from "../api/use-results";
import { LayoutToggle } from "../layout-toggle/layout-toggle";
import "./project-list.css";
import { ProjectCard } from "../card/card";

export const ProjectList = () => {
  const { status, data } = useResults();
  const [layout, setLayout] = useState<"row" | "grid">("grid");

  return (
    <section className="card-list">
      {status === "error" && (
        <p className="project-content">something went wrong loading</p>
      )}

      {status === "loading" && <p className="project-content">loading</p>}

      {status === "success" && (
        <>
          <p>{data?.entries} results</p>

          <LayoutToggle
            current={layout}
            onChange={(type) => setLayout(type)}
          ></LayoutToggle>

          <ul className="project-content" data-layout={layout} role="list">
            {data?.data.map(
              (entry) => (
                <li >
                  <ProjectCard {...entry} layout={layout}></ProjectCard>
                </li>
              )
            )}
          </ul>
        </>
      )}
    </section>
  );
};
