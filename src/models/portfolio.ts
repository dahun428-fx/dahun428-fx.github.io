import { description } from "./common/common";

export interface portfolio {
  index: number;
  title: string;
  descriptions?: description[];
  link?: string;
  link2?:string;
  skillKeywords?: string[];
}
