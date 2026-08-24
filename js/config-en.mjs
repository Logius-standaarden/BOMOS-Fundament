import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import { baseConfig } from "./base-config.mjs";

loadRespecWithConfiguration({
  ...baseConfig,
  shortName: "fundament/en",
  spellcheck: false,
});
