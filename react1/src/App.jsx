import React, { useRef } from "react";
import ChildInput from "./ChildInput";

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>forwardRef Example</h1>
      <ChildInput ref={inputRef} />
      <br />
      <br />
      <button onClick={focusInput}>Focus on Child Input</button>
    </div>
  );
}

export default App;
