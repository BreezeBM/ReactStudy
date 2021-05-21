function SelectFruit({ selectrdFruit, onChange }) {
  //...

  return (
    <div>
      <Select
        options={FRUITS.filter((item) => item.price <= maxPrice)}
        selected={selectrdFruit}
        onChange={onChange}
      />
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
하지만 필터 연산을 하면 새로운 배열이 만들어 지기 때문에 이 값은렌더링 할때마다
매번 새로운 값이 도니다,
이때는 useMemo를 사용한다. 
*/
