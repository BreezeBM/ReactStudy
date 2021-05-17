import React, { useState } from "react";

export default function App() {
  const [state, setstate] = useState({ name: "", age: 0 });
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type="text"
        value={state.anme}
        onChange={(e) => setstate({ ...state, name: e.target.value })}
      />
      <input
        type="number"
        value={state.age}
        onChange={(e) => setstate({ ...state, age: e.target.value })}
      />
    </div>
  );
}
