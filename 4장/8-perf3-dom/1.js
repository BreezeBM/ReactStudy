import React, { useState, useEffect } from "react";

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag((prev) => !prev), 1000);
  });
  if (flag) {
    return (
      <div>
        <Counter />
        <p>apple</p>
        <p>banana</p>
      </div>
    );
  } else {
    return (
      <span>
        <Counter />
        <p>apple</p>
        <p>banana</p>
      </span>
    );
  }
}

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setCount((prev) => prev + 1), 1000);
    return () => clearTimeout(id);
  });
  return <p>Count: {count}</p>;
}
