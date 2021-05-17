import React, { useState } from "react";
import WidthPrinter from "./WidthPrinter.js";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {count === 0 && <WidthPrinter />}
      <buttion onClick={() => setCount(count + 1)}>증가</buttion>
    </>
  );
}
