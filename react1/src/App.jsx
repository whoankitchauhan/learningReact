import useToggle from "./useToggle";

function App() {
  const [value, toggleValue] = useToggle(true);
  return (
    <div>
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={() => toggleValue(false)}>Hide Heading</button>
      <button onClick={() => toggleValue(true)}>Show Heading</button>
      {value ? <h1>Custom hooks</h1> : null}
    </div>
  );
}

export default App;
