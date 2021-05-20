// 이 것보다는
function Profile({ userId }) {
  const [user, setUser] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    getUserApi(useId).then((data) => setUser(data));
  }, [userId]);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
}

// 이렇게 연관된 것 끼리 모아두는 것이 좋다. 커스텀 훅으로 분리하는 것도 좋다.
function Profile({ userId }) {
  const user = useUser(userId);
  //   const [user, setUser] = useState(null);
  //   useEffect(() => {
  //     getUserApi(useId).then((data) => setUser(data));
  //   }, [userId]);

  const width = useWindowWidth();
  //   const [width, setWidth] = useState(window.innerWidth);
  //   useEffect(() => {
  //     const onResize = () => setWidth(window.innerWidth);
  //     window.addEventListener("resize", onResize);
  //     return () => window.removeEventListener("resize", onResize);
  //   }, []);
}
