import { kr } from "./resources/country/kr";
import { Config } from "./types";

export const prefix = process.env.NODE_ENV === "production" ? "https://dahun428-fx.github.io/resume" : "";
export const config: Config = {
  ...kr,
};
