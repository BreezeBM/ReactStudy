import React, { useCallback, useState } from "react";

export default function App() {
  const [text, setText] = useState(INITAL_TEXT);
  const [showText, setShowText] = useState(true);

  const setInitalText = useCallback((ref) => {
    ref && setText(INITAL_TEXT);
  }, []);

  return (
    <div>
      {showText && (
        <input
          type="text"
          ref={setInitalText}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기 / 가리기</button>
    </div>
  );
}

const INITAL_TEXT = "안녕하세요";
