import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

export interface profile {
  /**
   * ### 프로필 이미지
   */
  image: string;
  /** ### 이름 Object */
  name: {
    /** ### 이름 */
    title: string;
    /** ### 이름 옆 괄호로 작게 표시해주는 이름 */
    small?: string;
  };
  /** ### 연락 수단 목록 */
  contact: contact[];
  /** ### 공지 */
}

export interface contact {
  /**
   * ### 연락처 앞에 붙는 아이콘
   *
   * @type font-awesome type
   * @see https://www.npmjs.com/package/@fortawesome/react-fontawesome
   */
  icon: IconDefinition;
  /** ### 연락 수단 Title */
  title?: string;
  /**
   * ### 하이퍼 링크
   *
   * @description 해당 필드가 not null 이면 title 전체가 `<a href>` 태그로 감싸진다.
   */
  link?: string;
  /**
   * ### 내용을 뱃지로 표시할 것인가?
   *
   * @description Bootstrap 4 의 Badge 로 표시하고 싶을 경우 true
   */
  badge?: true;
}
