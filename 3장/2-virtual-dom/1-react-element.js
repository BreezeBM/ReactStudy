const element = <a href="http://google.com">click here</a>;
// 위의 jsx문법을 바벨이 아래와 같은 createElement를 호출하는 이러한 코드로 변환을 해줍니다.
const element = React.createElement('a', { href: 'http://google.com' }, 'click here');
