import "./layout-toggle.css"

interface LayoutToggleProps {
  onChange: (type: "grid" | "row") => void;
  current: "grid" | "row";
}

export const LayoutToggle = ({ onChange, current }: LayoutToggleProps) => {
  return (
    <div role="radiogroup" aria-label="layout selection">
      <label>
        grid layout
        <input
          type="radio"
          name="layout"
          id="grid"
          checked={current === "grid"}
          onChange={() => onChange("grid")}
        />
      </label>
      <label>
        row layout
        <input
          type="radio"
          name="layout"
          id="row"
          checked={current === "row"}
          onChange={() => onChange("row")}
        />
      </label>
    </div>
  );
};
