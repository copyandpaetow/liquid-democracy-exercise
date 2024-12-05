import "./header.css"

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = "" }: HeaderProps) => {
  return (
    <header className={`${className} main-header`}>
        <p>project overview</p>

      <button><span>accessibility</span><svg aria-hidden="true"></svg></button>
      <button><span>menu</span><svg aria-hidden="true"></svg></button>
    </header>
  );
};
