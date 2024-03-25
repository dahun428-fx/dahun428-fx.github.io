import { FontWeightType, description } from "@/models/common/common";
import { CSSProperties } from "react";
import { Anchor } from "../Anchor/Anchor";

type Props = {
  descriptions: description[];
  option?: any;
};

export const CommonDescription: React.FC<Props> = ({ descriptions, option }) => {
  const isPadding = option && option?.padding;

  return (
    <>
      {descriptions && descriptions.length > 0 && (
        <ul className={isPadding && "pt-2"}>
          {descriptions.map((description, descIndex) => {
            return (
              <>
                <Description description={description} key={descIndex.toString()} />
                {description.descriptions ? <DescriptionRecursion descriptions={description.descriptions} key={descIndex.toString()} /> : ""}
              </>
            );
          })}
        </ul>
      )}
    </>
  );
};

CommonDescription.displayName = "CommonDescription";

export const DescriptionRecursion: React.FC<Props> = ({ descriptions }) => {
  return (
    <ul>
      {descriptions.map((description, index) => {
        return (
          <>
            <Description description={description} key={index.toString()} />
            {description.descriptions ? <DescriptionRecursion descriptions={description.descriptions} key={index.toString()} /> : ""}
          </>
        );
      })}
    </ul>
  );
};

type DescProps = {
  description: description;
};

export const Description: React.FC<DescProps> = ({ description }) => {
  const { content, descriptions, href, postHref, postImage, weight } = description;

  const component = (() => {
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          <Anchor url={href} text={content} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={getFontWeight(weight)}>
          <Anchor url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <Anchor url={postHref} text={postHref} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <Anchor url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li style={getFontWeight(weight)}>{content}</li>
      </>
    );
  })();

  return component;
};

function getFontWeight(weight?: description["weight"]): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return {
    fontWeight: fontWeight[weight || "DEFAULT"],
  };
}

// Noto Sans KR Weights: 300, 400, 500, 700
const fontWeight: Record<FontWeightType, number> = {
  DEFAULT: 300,
  LIGHT: 300,
  REGULAR: 300,
  MEDIUM: 500,
  // BOLD: 700,
  BOLD: 500,
};
