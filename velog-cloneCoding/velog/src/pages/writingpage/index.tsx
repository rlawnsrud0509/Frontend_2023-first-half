import { ReactNode } from "react";
import * as C from "../../components/index";

interface PropsType {
  children: ReactNode;
}

export default function WritingPage({ children }: PropsType) {
  return (
    <>
      <C.Header />
      {children}
    </>
  );
}
