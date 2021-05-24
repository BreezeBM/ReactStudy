import React, { useState, useEffect } from "react";

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag((prev) => !prev), 1000);
  });

  const fruits = flag ? FRUITS_1 : FRUITS_2;
  return (
    <div>
      {/* {fruits.map((item, index) => (
        <p key={index}>{item}</p>
      ))} */}
      {fruits.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

const FRUITS_1 = ["apple", "banana"];
const FRUITS_2 = ["apple", "pineapple", "banana"];
