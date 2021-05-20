function GreetingA({ isLoginm, name }) {
  if (isLogin) {
    return <p>{`${name}님 안녕하세요`}</p>;
  } else {
    return <p>권한이 없습니다.</p>;
  }
}
// 위의 코드와 같은 코드
function GreetingB({ isLogin, name }) {
  return <p>{isLogin ? `${name}님 안녕하세요` : `권한이 없습니다.`}</p>;
}
