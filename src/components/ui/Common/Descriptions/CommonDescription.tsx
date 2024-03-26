import { FontWeightType, description } from "@/models/common/common";
import { CSSProperties, Fragment } from "react";
import { Anchor } from "../Anchor/Anchor";
import { v4 } from "uuid";

type Props = {
  descriptions: description[];
  option?: any;
  index?: number;
};

export const CommonDescription: React.FC<Props> = ({ descriptions, option, index = 0 }) => {
  const isPadding = option && option?.padding;
  const id = v4();
  return (
    <Fragment key={id}>
      {descriptions && descriptions.length > 0 && (
        <ul className={isPadding && "pt-2"}>
          {descriptions.map((description, descIndex) => {
            return (
              <Fragment key={descIndex.toString()}>
                <Description description={description} key={`${index.toString()}_${descIndex}_${id}_cur_u`} />
                {description.descriptions && <DescriptionRecursion descriptions={description.descriptions} key={`${index.toString()}_${descIndex}_${id}_cur_o`} />}
              </Fragment>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

CommonDescription.displayName = "CommonDescription";

export const DescriptionRecursion: React.FC<Props> = ({ descriptions, index = 0 }) => {
  const id = v4();
  return (
    <ul key={`ul_${index}_${id}`}>
      {descriptions.map((description, descIndex) => {
        return (
          <Fragment key={`${id}_${index}_${descIndex}`}>
            <Description description={description} key={`${index.toString()}_${descIndex}_${id}`} />
            {description.descriptions && <DescriptionRecursion descriptions={description.descriptions} key={`${index.toString()}_${descIndex}_${id}_cur`} />}
          </Fragment>
        );
      })}
    </ul>
  );
};

type DescProps = {
  description: description;
  index?: number;
};

export const Description: React.FC<DescProps> = ({ description, index }) => {
  const { content, descriptions, href, postHref, postImage, weight } = description;

  const id = v4();
  const component = (() => {
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)} key={`desc_${index}_${id}`}>
          <Anchor url={href} text={content} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={getFontWeight(weight)} key={`desc_${index}_${id}`}>
          <Anchor url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)} key={`desc_${index}_${id}`}>
          {content} <Anchor url={postHref} text={postHref} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getFontWeight(weight)} key={`desc_${index}_${id}`}>
          {content} <Anchor url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={getFontWeight(weight)} key={`desc_${index}_${id}`}>
          {content} <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li style={getFontWeight(weight)} key={`desc_${index}_${id}`}>
          {content}
        </li>
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
