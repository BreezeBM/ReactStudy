import React from "react";
import useWindowWidth from "./useWindowWidth";

export default function WidthWindow() {
  const width = useWindowWidth();
  return <div>{`width is ${width}`}</div>;
}
