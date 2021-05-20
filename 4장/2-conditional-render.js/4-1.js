// null 을 붙이지 않아도 되는 방법
function Greeting2({ isLogin, name, cash }) {
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다.
      {isLogin && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
        </div>
      )}
    </div>
  );
}

// 삼항 연산자 보다는 명확하게 구분해서 &&를 사용하는 것이 좋다.
function Greeting2({ isLogin, name, cash }) {
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다.
      {isLogin && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
        </div>
      )}
      {!isLogin && isLogin2 && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원 입니다.</p>
        </div>
      )}
    </div>
  );
}
