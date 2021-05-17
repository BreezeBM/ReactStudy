// return 이후 TItle 컴포넌트 랜더링 결과 까지
const elementTree = {
  type: 'div',
  props: {
    children: [
      {
        type: 'p',
        props: {
          style: { color: 'blue' },
          children: '리액트 공부하기',
        },
        //...
      },
      {
        type: 'p',
        props: { children: '실전 리액트 프로그래밍을 공부한다.' },
        //...
      },
      {
        type: 'p',
        props: { children: '우선순위 높음' },
      },
      {
        type: 'button',
        props: {
          onClick: function () {
            // Todo 컴포넌트의 onClick함수
          },
          children: '우선순위 변경',
        },
        //...
      },
    ],
  },
  //...
};
