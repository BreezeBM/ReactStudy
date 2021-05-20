function Greeting({ isLogin, isEvent, name, cash }) {
  return (
    <div>
      저희 웹사이트를 방문해 주셔서 감사합니다.
      {isEvent && (
        <div>
          <p>오늘의 이벤트를 놓치지 마세요</p>
          <button onClick={onClickEvent}>이벤트 참여하기</button>
        </div>
      )}
      {!isEvent && isLogin && cash <= 100000 && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하고 계신 금액은 {cash}입니다.</p>
        </div>
      )}
    </div>
  );
}

// &&연산자로 조건부 렌더링을 할 때는 주의할 점이 있습니다. 8번 ㄱ
