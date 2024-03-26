export interface skill {
  /** ### 대분류 */
  category: string;

  /** ### 해당 분류 내 항목들 */
  items: skillItem[];
}

export interface skillItem {
  title: string;
  /**
   * ### 보유 기술 수준
   *
   * @value 1: 옅은 회색 뱃지로 나타난다. (light)
   * @value 2: 짙은 회색 뱃지로 나타난다. (sencondary)
   * @value 3: 파란색 뱃지로 나타난다. (primary)
   * @value undefined: 뱃지가 붙지 않는다.
   */
  level?: 1 | 2 | 3;
}
