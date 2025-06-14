import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const [visible, setVisisble] = useState(true);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
      <button onClick={() => setVisisble(!visible)}>Toggle</button>

      {visible ? <Counter counter={counter} data={data} /> : null}
    </div>
  );
}

export default App;
