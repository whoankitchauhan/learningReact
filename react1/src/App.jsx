import User from "./User";

function App() {
  return (
    <div>
      <User>
        <h1 style={{ color: "orange" }}> Hey 1</h1>
      </User>
      <User>
        <h1> Hey 2</h1>
      </User>
      <User>
        <h1 style={{ color: "green" }}> Hey 3</h1>
      </User>

      <User color="purple">
        <h1> Hey 4</h1>
      </User>
    </div>
  );
}

export default App;
