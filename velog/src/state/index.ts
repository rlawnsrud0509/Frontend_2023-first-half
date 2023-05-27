import { atom } from "recoil";
import { v1 } from "uuid";

export const DarkTheme = atom<boolean>({
  key: `theme/${v1()}`,
  default: true,
});

export const isOptionSelects = atom<boolean[]>({
  key: `isoptionselects/${v1()}`,
  default: [true, false],
});
