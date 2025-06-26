import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setUsers(response.users); // extract "users" array from response
  }

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">User List</h1>
      {users?.map((user) => (
        <div key={user.id} className="p-3 mb-2 border rounded border-cyan-400">
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
                    <p>
            <strong>Age:</strong> {user.age}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
