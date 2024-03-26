import classNames from "classnames";
import { Badge as BootBadge } from "react-bootstrap";

export const BadgeThemes = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as const;
export type Theme = (typeof BadgeThemes)[number];
export const BadgeSizeThemes = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
export type size = (typeof BadgeSizeThemes)[number];

type Props = {
  content: string;
  theme?: Theme;
  size?: size;
  className?: string;
};
export const Badge: React.FC<Props> = ({ content, theme = "primary", size = "h1", className }) => {
  if (size === "h1") {
    return (
      <BootBadge style={{ fontSize: "32px", margin: "0.3em" }} className={classNames(className)} bg={theme}>
        {content}
      </BootBadge>
    );
  } else if (size === "h2") {
    return (
      <BootBadge style={{ fontSize: "24px", margin: "0.3em" }} className={className} bg={theme}>
        {content}
      </BootBadge>
    );
  } else if (size === "h3") {
    return (
      <BootBadge style={{ fontSize: "20px", margin: "0.3em" }} className={className} bg={theme}>
        {content}
      </BootBadge>
    );
  } else if (size === "h4") {
    return (
      <BootBadge style={{ fontSize: "18px", margin: "0.3em" }} className={className} bg={theme}>
        {content}
      </BootBadge>
    );
  } else if (size === "h5") {
    return (
      <BootBadge style={{ fontSize: "16px", margin: "0.3em" }} className={className} bg={theme}>
        {content}
      </BootBadge>
    );
  } else {
    return (
      <BootBadge style={{ fontSize: "12px", margin: "0.3em" }} className={className} bg={theme}>
        {content}
      </BootBadge>
    );
  }
};
Badge.displayName = "Badge";
