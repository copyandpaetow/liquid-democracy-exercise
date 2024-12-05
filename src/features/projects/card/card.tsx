import { Entry } from "../api/data";
import "./card.css";

interface ProjectCardProps extends Entry {
  layout: "row" | "grid";
}

export const ProjectCard = ({
  image,
  subHeadline,
  headline,
  progress,
  copy,
  tags,
  layout,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <figure>
        <picture>
          <img
            src={image.url}
            alt={image.description}
            loading="lazy"
            height={layout === "grid" ? "400" : "200"}
            width={layout === "grid" ? "200" : "400"}
          />
        </picture>
        <figcaption>{image.attribution}</figcaption>
      </figure>
      <div className="content">
        <span className="subheadline">{subHeadline}</span>

        <div className="tags">
          {tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>

        <h2 className="headline">
          <a href="http://google.com">{headline}</a>
        </h2>
        <p className="copy">{copy}</p>

        <div className="progress">
          {progress.duration - progress.current !== 0 ? (
            <>
              <progress
                max={progress.duration}
                value={progress.duration - progress.current}
                aria-label={`${progress.current.toFixed()} ${
                  progress.description
                }`}
              ></progress>
              <p>
                {progress.current.toFixed()} {progress.description}
              </p>
            </>
          ) : (
            <p>completed</p>
          )}
        </div>
      </div>
    </div>
  );
};
