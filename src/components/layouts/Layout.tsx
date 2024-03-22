import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        <div>{children}</div>
      </div>
    </div>
  );
};
Layout.displayName = "Layout";
