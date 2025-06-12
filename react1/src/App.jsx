import { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [mail, setMail] = useState();

  return (
    <div>
      <h1>Controlled Compoent</h1>
      <form action="" method="get">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
        <button
          onClick={() => {
            setName("");
            setMail("");
            setPassword("");
          }}
        >
          Clear
        </button>
        <h2>{name}</h2>
        <h2>{password}</h2>
        <h2>{mail}</h2>
      </form>
    </div>
  );
}

export default App;
