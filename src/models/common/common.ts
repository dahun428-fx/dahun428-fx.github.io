export interface commonRow {
  index: number;
  leftTitle: string;
  leftSubTitle?: string;
  rightTitle?: string;
  rightSubTitle?: string;
  rightDescriptions?: description[];
  rightSkillKeywords?: string[];
  link?: string;
}

export interface description {
  /** ### 설명 본문 */
  content: string;

  /**
   * ### 폰트 두께 설정이 필요할 경우
   *
   * @default 'DEFAULT'
   * @description Noto Sans KR 에서 font-weight 300 을 DEFAULT 로 사용하고 있다.
   * @see https://github.com/uyu423/resume-nextjs/blob/master/component/common/CommonRow.tsx
   */
  weight?: FontWeightType;

  /**
   * ### 하이퍼링크 (overload)
   *
   * @description `undefiend` 가 아닐 경우 `content` 필드는 `<a href>` 가 된다.
   */
  href?: string;

  /**
   * ### content 끝에 붙일 이미지
   *
   * @description `undefined` 가 아닐 경우 `content` 뒤에 이미지를 붙인다.
   */
  postImage?: string;

  /**
   * ### content 끝에 붙일 하이퍼링크
   *
   * @description `undefined` 가 아닐 경우 `content` 뒤에 하이퍼링크를 붙인다.
   */
  postHref?: string;

  /**
   * ### Depth 가 하나 더 들어가는 Description
   *
   * @description 여러 계층을 가지는 `<ul>` 태그 구현을 위해 Recursion 형태로 구현됨
   */
  descriptions?: description[];
}

export type FontWeightType = "DEFAULT" | "LIGHT" | "REGULAR" | "MEDIUM" | "BOLD";
