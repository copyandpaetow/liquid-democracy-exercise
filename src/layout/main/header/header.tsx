import "./header.css"

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = "" }: HeaderProps) => {
  return (
    <header className={`${className} main-header`}>
        <p>project overview</p>

      <button>Icon 1</button>
      <button>Icon 2</button>
    </header>
  );
};
