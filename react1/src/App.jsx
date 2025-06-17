import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  // Derived state
  const totalUser = users.length;
  const uniqueUsersList = [...new Set(users)];
  const uniqueUsers = uniqueUsersList.length;
  const lastUser = users[users.length - 1];

  // Add user logic
  const handleAddUsers = () => {
    const trimmed = user.trim();

    if (trimmed === "") return; // prevent empty input
    if (users.includes(trimmed)) return; // prevent duplicate

    setUsers([...users, trimmed]); // add to list
    setUser(""); // reset input
  };

  // Delete user logic
  const handleDelete = (name) => {
    const updatedUsers = users.filter((u) => u !== name);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>Learning Derived State</h1>

      <h2>Total Users: {totalUser}</h2>
      <h2>Last User: {lastUser || "N/A"}</h2>
      <h2>Unique Users: {uniqueUsers}</h2>

      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        type="text"
        placeholder="Add New User"
      />
      <button onClick={handleAddUsers}>Add User!</button>

      <h3>Unique Users List:</h3>
      {uniqueUsersList.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => handleDelete(item)}>❌ Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
