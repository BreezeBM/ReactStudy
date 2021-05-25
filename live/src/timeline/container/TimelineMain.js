import React, { useState } from "react";
import { getNextTimeline } from "../../common/mockData";
import TimelineList from "../component/TimelineList";
import { actions } from "../state";
import { useDispatch, useSelector } from "react-redux";

export default function TimelineMain() {
  // const [, forceUpdate] = useReducer((v) => v + 1, 0);
  // useEffect(() => {
  //   let prevTimelines = store.getState().timeline.timelines;
  //   const unsubscriber = store.subscribe(() => {
  //     const timelines = store.getState().timeline.timelines;
  //     if (prevTimelines !== timelines) {
  //       forceUpdate();
  //     }
  //     prevTimelines = timelines;
  //   });
  //   return () => unsubscriber();
  // }, []);
  const [currentText, setCurrentText] = useState("");
  const text = useSelector((state) => state.timeline.text);
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);
  const error = useSelector((state) => state.timeline.error);

  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  }

  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(actions.requestLike(timeline));
  }

  console.log("timeline render");

  function onChangeText(e) {
    const text = e.target.value;
    console.log(text);
    dispatch(actions.trySetText(text));
    setCurrentText(text);
  }

  return (
    <div>
      <button onClick={onAdd}>타임 라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>전송중....</p>}
      {!!error && <p>에러 발생: {error}</p>}
      <input type="text" value={currentText} onChange={onChangeText} />
      {!!text && <p>{text}</p>}
    </div>
  );
}

// {!!text && <p>text</p>} text가 있을 때, 렌더링을 해준다.
