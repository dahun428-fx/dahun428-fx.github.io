export interface introduce {
  /**
   * ### 자기소개 내용
   *
   * @description `string` 배열이다. 요소 하나가 하나의 `<p>` 태그가 된다.
   */
  contents: string[];

  /**
   * ### 하단 싸인
   *
   * @description 그냥 있어보여서 추가해봤다.
   */

  sign?: string;
  /**
   * ### 마지막 업데이트 날짜
   *
   * @sample '2020-03-16',
   * @default `package.json` 의 latestUpdatedAt 을 가져온다.
   */
  latestUpdated: string;
}
