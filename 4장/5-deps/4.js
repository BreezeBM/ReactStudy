function Timer({ initalTotalSeconds }) {
  const [hour, setHour] = useState(Math.floor(initalTotalSeconds / 3600));
  const [minute, setMinute] = useState(
    Math.floor((initalTotalSeconds % 3600) / 60)
  );
  const [second, setSecond] = useState(initalTotalSeconds % 60);

  useEffect(() => {
    const id = setInterval(() => {
      if (second) {
        setSecond(second - 1);
      } else if (minute) {
        setMinute(minute - 1);
        setSecond(59);
      } else if (hour) {
        setHour(hour - 1);
        setMinute(59);
        setSecond(59);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [hour, minute, second]);
}

/*
여러 상태값을 참조하면서 값을 변경할 때는 어떻게 하는지 살펴보자.
5번으로
*/
