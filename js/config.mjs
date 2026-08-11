import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ {
        "company" : "HAN University of Applied Sciences",
        "companyURL" : "https://www.han.nl/",
        "name" : "Erwin Folmer"
      } ],
  editors: [
      {
        "company" : "HAN University of Applied Sciences",
        "companyURL" : "https://www.han.nl",
        "name" : "Erwin Folmer"
      },
      {
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl",
        "name" : "Gül Işik"
      },
      {
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl",
        "name" : "Edwin Wisse"
      },
      {
        "company" : "TNO",
        "companyURL" : "https://www.tno.nl/nl",
        "name" : "Wouter van den Berg"
      }
    ],
  github: "https://github.com/Logius-standaarden/BOMOS-Fundament",
  maxTocLevel: 3,
  pubDomain: "bomos",
  publishDate: "2026-10-10",
  publishVersion: "3.0.2",
  previousPublishDate: "2023-11-02",
  previousPublishVersion: "3.0.1",
  shortName: "fundament/en",
  specStatus: "WV",
  specType: "HR",
  spellcheck: false,
});
