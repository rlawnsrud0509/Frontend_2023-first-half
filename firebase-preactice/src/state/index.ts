import { UserCredential } from "firebase/auth";
import { atom } from "recoil";

export const userData = atom<UserCredential | null>({
  key: "userData",
  default: null,
});
