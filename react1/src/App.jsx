import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    name: "ankit",
    age: 23,
    email: "ankit@gmail.com",
  });
  return (
    <div>
      <h1>Input Field</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value.name)}
        value={value.name}
        placeholder="Enter Your Name"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setValue(e.target.value.age)}
        value={value.age}
        placeholder="Enter Your Age"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setValue(e.target.value.email)}
        value={value.email}
        placeholder="Enter Your Mail"
      />
      <button
        onClick={() =>
          setValue({
            name: "",
            age: 0,
            email: "",
          })
        }
      >
        Clear
      </button>
      <h2>{value.name}</h2>
      <h2>{value.age}</h2>
      <h2>{value.email}</h2>
    </div>
  );
}

export default App;
