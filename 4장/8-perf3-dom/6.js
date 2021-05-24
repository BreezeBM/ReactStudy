import React, { useState, useEffect } from "react";

export default function App({ user }) {
  //...
  return (
    <div>
      <p>사용자 상세정보</p>
      <UserDetail key={user.id} user={user} />
    </div>
  );
}

function UserDetail({ user }) {
  //...
}
