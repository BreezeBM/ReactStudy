function SelectFruit({ selectrdFruit, onChange }) {
  //...

  return (
    <div>
      <Select options={FRUITS} selected={selectrdFruit} onChange={onChange} />
      {/*... */}
    </div>
  );
}

const FRUITS = [
  { name: "apple", price: 500 },
  { name: "banana", price: 1000 },
  { name: "orange", price: 1500 },
];

/* 
이렇게 과일 목록이 항상 같은 값을 가지고 있다면, 
이렇게 컴포넌트 밖으로 빼서 상수 변수로 관리를 하면 FRUITS는 변하지 않는 값이 된다. 
*/
