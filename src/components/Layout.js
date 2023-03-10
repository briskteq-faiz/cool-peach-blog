import React from "react";
import { Link } from "gatsby";
import * as styles from "./Layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/blog" className={styles.link}>
            Blog
          </Link>
          <Link to="/about" className={styles.link}>
            About
          </Link>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </nav>
      </header>
      <h1>{pageTitle}</h1>
      {children}
    </div>
  );
};

export default Layout;
