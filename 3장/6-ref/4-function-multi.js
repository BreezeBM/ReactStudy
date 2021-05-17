import React, { useState, useContext, createContext } from "react";

export default function App() {
  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", width: "100vw", height: "100%" }}
      >
          {BOX_LIST}
      </div>
    </div>
  );
}

const BOX_LIST= [
    {id: 1, width: 70},
    {id: 2, width}
]