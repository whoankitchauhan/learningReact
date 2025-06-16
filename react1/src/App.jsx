import { useRef } from "react";
function App() {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);

  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "Dal na Name";
    inputRef.current.value = "Ankit";
  };
  const toggleHandler = () => {
    inputRef.current.style.display =
      inputRef.current.style.display === "none" ? "inline-block" : "none";
  };

  const h1Handler = () => {
    h1Ref.current.style.color = "purple";
  };
  return (
    <div>
      <h1>Learning useRef Hook</h1>

      <button onClick={toggleHandler}>Toggle</button>

      <input ref={inputRef} type="text" placeholder="Enter Your Name" />
      <button onClick={inputHandler}>Focus on Input Field</button>
      <br />
      <br />
      <br />

      <h1 ref={h1Ref}>h1</h1>
      <button onClick={h1Handler}>H1 handler</button>
    </div>
  );
}

export default App;
