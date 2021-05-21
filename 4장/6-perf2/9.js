function SelectFruit({ selectrdFruit, onChange }) {
  //...
  const fruits = useMemo(
    () => FRUITS.filter((item) => item.price <= maxPrice),
    [maxPrices]
  );
  return (
    <div>
      <Select options={fruits} selected={selectrdFruit} onChange={onChange} />
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
useMemo를 사용하면 필요할 때만 fruits 값이 변경되도록 할 수 있다. 
결과적으로 options도 필요할 때만 변경이 되는 건데 
이안에서 사용하는 속성값이나 상태값을 의존성 배열에 입력을 하면 됩니다. 

여기서는 maxPrice라는 상태값을 사용했기 때문에 이 값을 의존성 배열에 입력을 했고,
따라서 maxPrice가 변경될 때만 fruits값이 변경이된다.

 */
