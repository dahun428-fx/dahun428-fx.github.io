import { Badge as BootBadge } from "react-bootstrap";

export const BadgeThemes = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"] as const;
export type Theme = (typeof BadgeThemes)[number];
export const BadgeSizeThemes = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
export type size = (typeof BadgeSizeThemes)[number];

type Props = {
  content: string;
  theme?: Theme;
  size?: size;
};
export const Badge: React.FC<Props> = ({ content, theme = "primary", size = "h1" }) => {
  if (size === "h1") {
    return (
      <h1>
        <BootBadge bg={theme}>{content}</BootBadge>
      </h1>
    );
  } else if (size === "h2") {
    return (
      <h2>
        <BootBadge bg={theme}>{content}</BootBadge>
      </h2>
    );
  } else if (size === "h3") {
    return (
      <h3>
        <BootBadge bg={theme}>{content}</BootBadge>
      </h3>
    );
  } else if (size === "h4") {
    return (
      <h4>
        <BootBadge bg={theme}>{content}</BootBadge>
      </h4>
    );
  } else if (size === "h5") {
    return (
      <h5>
        <BootBadge bg={theme}>{content}</BootBadge>
      </h5>
    );
  } else {
    return (
      <h6>
        <BootBadge bg={theme}>{content}</BootBadge>
      </h6>
    );
  }
};
Badge.displayName = "Badge";
