import React, { useState } from "react";

export default function App() {
  return <SelectFruit />;
}

function SelectFruit() {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [newFruit, setNewFruit] = useState("");

  function addNewFruit() {
    // fruits.push(newFruit);
    setFruits([...fruits, newFruit]);
    setNewFruit("");
  }
  return (
    <div>
      <Select options={fruits} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>add</button>
    </div>
  );
}

const Select = React.memo(({ options }) => (
  <div>
    {options.map((item) => (
      <p>{item}</p>
    ))}
  </div>
));

/*
function addNewFruit() {
    fruits.push(newFruit);
    setNewFruit("");
  }

  이렇게 작성을 하면 추가가 안된다. 불변 객체로 관리를 해야한다.

      setFruits([...fruits, newFruit]);
이렇게 해야한다
*/
