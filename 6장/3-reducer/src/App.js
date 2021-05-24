import React from "react";
import {
  addTimeline,
  removeTimeLine,
  editTimeLine,
  increaseNextPage,
} from "./timeline/state";
import { addFriend, removeFriend, editFriend } from "./friend/state";
import store from "./common/store";
import App from "../../../live/src/App";

store.dispatch(addTimeline({ id: 1, desc: "코딩은 즐거워" }));
store.dispatch(addTimeline({ id: 2, desc: "리덕스 좋아" }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeLine({ id: 2, desc: "리덕스 너무 좋아" }));
store.dispatch(removeTimeLine({ id: 1, desc: "코딩은 너무 즐거워" }));

store.dispatch(addFriend({ id: 1, name: "IU" }));
store.dispatch(addFriend({ id: 2, name: "YoungZi" }));
store.dispatch(editFriend({ id: 2, name: "SUZY" }));
store.dispatch(removeFriend({ id: 1, name: "IU" }));

export default function App() {
  return <div>React!</div>;
}
