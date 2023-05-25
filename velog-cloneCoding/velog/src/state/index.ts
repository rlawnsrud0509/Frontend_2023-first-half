import { atom } from "recoil";

export const DarkTheme = atom<boolean>({
  key: "theme",
  default: true,
});

export const isOptionSelects = atom<boolean[]>({
  key:"isOptionSelected",
  default: [true, false],
});