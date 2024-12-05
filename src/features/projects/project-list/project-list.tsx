import { useState } from "react";
import { useResults } from "../api/use-results";
import { LayoutToggle } from "../layout-toggle/layout-toggle";
import "./project-list.css";

export const ProjectList = () => {
  const { status, data } = useResults();
  const [layout, setLayout] = useState<"row" | "grid">("grid");

  return (
    <section className="card-list">
      {status === "error" && (
        <p className="content">something went wrong loading</p>
      )}

      {status === "loading" && <p className="content">loading</p>}

      {status === "success" && (
        <>
          <p>{data?.entries} results</p>

          <LayoutToggle
            current={layout}
            onChange={(type) => setLayout(type)}
          ></LayoutToggle>

          <ul className="content" data-layout={layout} role="list">
            {data?.data.map(({ headline, subHeadline, copy, image }) => (
              <li>
                <span>{subHeadline}</span>
                <h2>
                  <a href="http://google.com">{headline}</a>
                </h2>
                <p>{copy}</p>

                <figure>
                  <picture>
                    <img
                      src={image.url}
                      alt={image.description}
                      loading="lazy"
                      height="500"
                      width="300"
                    />
                  </picture>
                  <figcaption>{image.attribution}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
