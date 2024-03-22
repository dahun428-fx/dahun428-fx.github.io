import styles from "./Title.module.scss";

export const Themes = ["main", "sub", "default"] as const;
export type Theme = (typeof Themes)[number];

type Props = {
  title?: string;
  theme?: Theme;
};

export const Title: React.FC<Props> = ({ title = "", theme = "default" }) => {
  if (theme === "main") {
    return <h2 className={styles.main}>{title}</h2>;
  } else if (theme === "sub") {
    return <h4 className={styles.sub}>{title}</h4>;
  } else {
    return <h2 className={styles.main}>{title}</h2>;
  }
};

Title.displayName = "Title";
