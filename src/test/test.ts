import { States, Store } from "../types";

export const storeStub: Store = {
  id: "1a878f29-e607-422e-825d-8f0a1c9eb511",
  banner: "Ralph's",
  vanityName: "Sage (Ralph's)",
  timezone: "America/Los_Angeles",
  storeNumber: 5701,
  district: 98,
  division: 769,
  openTime: "8:29",
  closeTime: "7:23",
  state: "CA",
  city: "Santa Barbara",
  zipCode: "93150",
};

export const bannersStub: string[] = [
  "Ralph's",
  "Roundy's",
  "King Sooper's",
  "Smith's",
  "Fred Meyer",
];

export const statesStub: States = {
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
};

export const timezonesStub: string[] = [
  "America/Los_Angeles",
  "America/Chicago",
  "America/New_York",
  "America/Boise",
];
