import UserProfile from "./userProfile";

function App() {
  return (
    <>
      <h1>Style With Module CSS</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
    </>
  );
}

export default App;
