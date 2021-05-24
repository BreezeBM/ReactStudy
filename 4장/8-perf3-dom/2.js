import React, { useState, useEffect } from "react";

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag((prev) => !prev), 1000);
  });
  return (
    <div
      className={flag ? "yes" : "no"}
      style={{ color: "black", backgroundColor: flag ? "#ffaaaa" : "#aaffaa" }}
    >
      <Counter />
      <p>apple</p>
      <p>banana</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setCount((prev) => prev + 1), 100);
    return () => clearTimeout(id);
  });
  return <p>Count: {count}</p>;
}
