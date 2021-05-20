import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

export default function App() {
  const boxRef = useRef();
  const [width, setWidth] = useState(200);
  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width);
    if (width > 500) {
      setWidth(500);
    }
  }, [width]);
  // useEffect(() => {
  //   if (width > 500) {
  //     setWidth(200);
  //   }
  // }, [width]);
  return (
    <div>
      <div
        ref={boxRef}
        style={{ width, height: 100, backgroundColor: "green" }}
      >
        test
      </div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500이하
      </button>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 501);
          setWidth(value);
        }}
      >
        500이상
      </button>
    </div>
  );
}
