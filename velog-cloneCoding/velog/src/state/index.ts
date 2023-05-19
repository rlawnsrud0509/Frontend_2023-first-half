import { atom } from "recoil";

export const DarkTheme = atom<boolean>({
  key: "theme",
  default: true,
});
