import { useRef } from "react";

function App() {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleForm = (event) => {
    event.preventDefault();

    const userName = document.querySelector("#userName").value;
    const password = document.querySelector("#password").value;

    console.log("Username:", userName);
    console.log("Password:", password);
  };

  const handleFormRef = (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    console.log("Ref");
    console.log("Username:", userName);
    console.log("Password:", password);
  };

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={handleForm}>
        <input type="text" id="userName" placeholder="Enter Username" />
        <br />
        <br />
        <input type="password" id="password" placeholder="Enter Password" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h1>Uncontrolled Component with useRef</h1>
      <form onSubmit={handleFormRef}>
        <input
          type="text"
          ref={userNameRef}
          id="userNameRef"
          placeholder="Enter Username"
        />
        <br />
        <br />
        <input
          type="password"
          ref={passwordRef}
          id="passwordRef"
          placeholder="Enter Password"
        />
        <br />
        <br />
        <button type="submit">Submit </button>
      </form>
    </div>
  );
}

export default App;
