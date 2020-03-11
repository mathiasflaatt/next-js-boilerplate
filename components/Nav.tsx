import React, { useMemo } from "react";
import { Logo } from "./Logo";

type NavProps = {
  title?: string;
};
export const Nav: React.FC<NavProps> = ({ title, children }) => {
  const titleRender = useMemo(() => {
    if (!!title) {
      return <h1 style={{padding: 0, margin: 0, lineHeight: '24px', fontSize: "24px"}} className="d-none d-md-block navbar-brand">{title}</h1>;
    }
    return null;
  }, [title]);

  return (
    <>
      <nav className="navbar">
        <div className="container flex-row justify-between align-items-center">
          <a className="navbar-brand" href="/" style={{ padding: 0, margin: 0 }}>
            <Logo />
          </a>
          {titleRender}
        </div>
      </nav>
      {children}
    </>
  );
};
