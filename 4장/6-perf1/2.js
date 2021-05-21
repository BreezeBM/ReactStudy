const prevProps = {
  todos: [
    { title: "fix bug", priority: "high" },
    { title: "meeting with jone", priority: "low" },
    //...
  ],
  friends: [],
};

const nextProps = {
  todos: [
    { title: "fix bug", priority: "high" },
    { title: "meeting with jone", priority: "high" },
    //...
  ],
  friends: [],
};

/*
그런데 이전/이후 속성값을 갖고 있을 때 속성값이 변경 됐는지 어떻게 판단할 수 있을까요?

예를 들면 이렇게 속성값 안에 todos라는 객체가 있다고 할 때 
low -> high로 변경이 됐다.
이렇게 변경 됐다는 사실을 어떻게 알 수 있을까요? 
가장 간단하고 무식한 방법은 다 비교하는 것입니다.
이 방식은 성능이 않좋습니다. 

이걸 해결하는 방법이 있습니다. 
prevProps.todos === nextProps.todos
그건 바로 객체를 불변 객체로 관리하는 것 입니다. 

데이터를 불변 데이터로 관리하게 되면 이렇게 이전/이후 값의 단순 비교만으로 
컴포넌트의 속성값이 변경됬는지 알 수 있다.

불변객체로 관리하면 렌더링 성능에 큰 도움이 된다. 

const prevTodos = [1, 2, 3];
? 불변객체를 관리한다는 것은 새로운 객체를 만드는 것 입니다. 
* const nextTodos = [...todos, 4] 

prevTodos === nextTodos 이렇게만 하면 비교가 끝난다.

속성값 비교 함수가 없다면, React.memo(MyComponent)
리액트는 얕은 비교라는 것을 수행을 한다. 
얕은 비교는 그 안에 있는 속성값끼리 비교를 하는 것이다. 

const isEqual = prevProps.todos === nextProps.todos && prevProps.friends === nextProps.friedns


*/
