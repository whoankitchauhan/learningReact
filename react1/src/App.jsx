import { useId } from "react";

function App() {
  return (
    <div>
      <h1>useId Hook</h1>
      <FormGroup />
      <FormGroup />
    </div>
  );
}
function FormGroup() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </div>
  );
}

export default App;
