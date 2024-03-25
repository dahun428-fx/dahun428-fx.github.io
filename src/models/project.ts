import { description } from "./common/common";

export interface project {
  index: number;
  title: string;

  /** ### 어디서 수행했는지 (or subtitle) */
  where: string;

  /**
   * ### 프로젝트 시작일
   *
   * @format YYYY-MM
   * @example "2018-02"
   */
  startedAt: string;

  /**
   * ### 프로젝트 종료일
   *
   * @format YYYY-MM
   * @example "2021-02"
   * @description `undefined` 일 경우 나타나지 않는다.
   */
  endedAt?: string;

  /**
   * ### 프로젝트 설명
   */
  descriptions: description[];
}
