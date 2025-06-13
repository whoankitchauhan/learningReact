import User from "./User";

function App() {
  const userData = [
    {
      id: 1,
      name: "Ankit Chauhan",
      age: 23,
      email: "ankit@gmail.com",
    },
    {
      id: 2,
      name: "Rohan",
      age: 20,
      email: "rohan@gmail.com",
    },
    {
      id: 3,
      name: "Mohit",
      age: 19,
      email: "mohit@gmail.com",
    },
    {
      id: 4,
      name: "Prem",
      age: 25,
      email: "prem@gmail.com",
    },
  ];
  return (
    <div>
      <h1>Reuse Component in Loop</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <User data={user} />
        </div>
      ))}
    </div>
  );
}

export default App;
