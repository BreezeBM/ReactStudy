// 리액트 요소
const element = (
  <a key="key1" style={{ width: 100 }} href="http://google.com">
    Click Here
  </a>
);

console.log(element);

const consoleLogResult = {
  type: 'a',
  key: 'key1',
  ref: null,
  prop: {
    href: 'http://google.com',
    style: {
      width: 100,
    },
    children: 'click here',
  },
  // ...
};
