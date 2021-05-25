import React from "react";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>{`이름: ${friend.name} / 나이: ${friend.age}`}</li>
      ))}
    </ul>
  );
}
