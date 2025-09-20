export type School = {
  name: string;
  address: string;
  hrefPath: string;
  dayOfOpen: string;
};

export type SchoolsData = School[];

export const allSchools: SchoolsData = [
  {
    name: "Musik Mittelschule Leonding",
    address: "Ruflingerstraße 14, 4060 Leonding",
    hrefPath: "https://mmsleonding.at/meet-your-future/",
    dayOfOpen: "20. und 21. November 2025",
  },
  {
    name: "Kreuzschwestern Mittelschule Linz",
    address: "Stockhofstraße 10, 4020 Linz",
    hrefPath: "https://www.msksl.at/",
    dayOfOpen: "19. November 2025",
  },
  {
    name: "Stiftgymnasium Wilhering",
    address: "Linzer Straße 8, 4073 Wilhering",
    hrefPath: "https://www.sgwilhering.at/",
    dayOfOpen: "7. November 2025",
  },
  {
    name: "Mittelschule Alkoven",
    address: "Schulstraße 1, 4072 Alkoven",
    hrefPath: "https://ms-alkoven.at/",
    dayOfOpen: "Noch kein Termin",
  },
  {
    name: "Mittelschule Ottensheim",
    address: "Bahnhofstraße 5, 4100 Ottensheim",
    hrefPath: "https://ms-ottensheim.edupage.org/",
    dayOfOpen: "Noch kein Termin",
  },
  {
    name: "Mittelschule Eferding Nord",
    address: "Postgütlstrasse 4a, 4070 Eferding",
    hrefPath: "https://mittelschule-eferding-nord.at/",
    dayOfOpen: "Noch kein Termin",
  },
  {
    name: "Sportschule Eferding Süd",
    address: "Welser Straße 19, 4070 Eferding",
    hrefPath: "https://www.xn--sms-sd-7ya.at/",
    dayOfOpen: "Noch kein Termin",
  },
  {
    name: "Private pädagogische Hochschule der Diozöse Linz",
    address: "Salesianumweg 5, 4020 Linz",
    hrefPath: "https://www.stifterschule.at/",
    dayOfOpen: "Kein Termin gefunden",
  },
  //     {
  // name: "",
  // address: "",
  // hrefPath: "",
  // dayOfOpen: ""
  // },
];
