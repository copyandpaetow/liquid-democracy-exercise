import { ReactNode } from "react";
import { Header } from "./header/header";
import "./main.css"

interface LayoutProps {
  children?: ReactNode;
  wrapperClassName?: string;
}

export const Layout = ({ children, wrapperClassName = "" }: LayoutProps) => {
  return (
    <div className="main-layout">
      <Header className="header"></Header>
      <main className={`${wrapperClassName} main`}>{children}</main>
    </div>
  );
};
