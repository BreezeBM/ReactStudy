import React, { useState } from "react";
import FriendList from "./component/FriendList";
import NumberSelect from "./component/NumberSelect";
import FriendPage from "./container/FriendPage";
import { getNextFreind } from "./data";

export default function App() {
  return (
    <div>
      <FriendPage />
    </div>
  );
}
