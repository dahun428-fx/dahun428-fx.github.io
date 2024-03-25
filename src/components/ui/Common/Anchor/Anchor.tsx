type Props = {
  url: string;
  text?: string;
};

export const Anchor: React.FC<Props> = ({ url, text }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      {text || url}
    </a>
  );
};

Anchor.displayName = "Anchor";
