import { ReactNode } from "react";
import * as C from "../../components/index";

interface PropsType {
  children: ReactNode;
}

export default function MainPage({ children }: PropsType) {
  return (
    <>
      <C.Header />
      {children}
    </>
  );
}
