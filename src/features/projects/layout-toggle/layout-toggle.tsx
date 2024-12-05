import "./layout-toggle.css"

interface LayoutToggleProps {
  onChange: (type: "grid" | "row") => void;
  current: "grid" | "row";
}

export const LayoutToggle = ({ onChange, current }: LayoutToggleProps) => {
  return (
    <div className="toggle-layout" role="radiogroup" aria-label="layout selection">
      <label>
        <span className="visually-hidden">grid layout</span>
        <svg></svg>
        <input
          type="radio"
          name="layout"
          id="grid"
          defaultChecked={current === "grid"}
          onChange={() => onChange("grid")}
          className="visually-hidden"
        />
      </label>
      <label>
      <span className="visually-hidden">    row layout</span>
      <svg></svg>
        <input
          type="radio"
          name="layout"
          id="row"
          defaultChecked={current === "row"}
          onChange={() => onChange("row")}
          className="visually-hidden"
        />
      </label>
    </div>
  );
};
