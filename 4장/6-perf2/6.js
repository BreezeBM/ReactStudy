function SelectFruit({ selectrdFruit, onChange }) {
  //...

  return (
    <div>
      <Select
        options={[
          { name: "apple", price: 500 },
          { name: "banana", price: 1000 },
          { name: "orange", price: 1500 },
        ]}
        selected={selectrdFruit}
        onChange={onChange}
      />
      {/*... */}
    </div>
  );
}

/*
함수와 마찬가지로 컴포넌트 내부에서 이렇게 객체를 정의해서 자식 컴포넌트의 속성값으로 입력하면 
객체의 내용이 변경되지 않아도 자식 컴포넌트 입장에서는 속성값이 변경됐다고 인식을 합니다.
*/
