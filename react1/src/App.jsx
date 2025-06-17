import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const handleAddUsers = () => {
    setUsers([...users, user]);
  };
  const totalUser = users.length;
  const lastUser = users[users.length - 1];
  const uniqueUsers = [...new Set(users)].length;
  return (
    <div>
      <h1>Learning Derived State</h1>

      <h2>Total Users : {totalUser}</h2>
      <h2>Last Users :{lastUser}</h2>
      <h2>Unique Users :{uniqueUsers}</h2>

      <input
        onChange={(event) => setUser(event.target.value)}
        type="text"
        placeholder="Add New User"
      />
      <button onClick={handleAddUsers}>Add User !</button>
      {users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
}

export default App;
