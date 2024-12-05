import "./header.css"

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = "" }: HeaderProps) => {
  return (
    <header className={`${className} main-header`}>
        <p>project overview</p>

      <button><span className="visually-hidden">accessibility</span><svg></svg></button>
      <button><span className="visually-hidden">menu</span><svg></svg></button>
    </header>
  );
};
