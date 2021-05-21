function SelectFruit({ selectFruit, onChange }) {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [newFruit, setNewFruit] = useState("");
  function addNewFruit() {
    fruits.push(newFruit);
    setNewFruit("");
  }
  //...

  return (
    <div>
      <Select options={fruits} selected={selectedFruit} onChange={onChange} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>add</button>
    </div>
  );
}
