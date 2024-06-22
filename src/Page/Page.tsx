import React, { ReactNode } from "react";
import { PINK } from "../styles/Colors";

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
}

const Page = ({ children, style }: Props) => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        height: "100%",
        backgroundColor: PINK[40],
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Page;
