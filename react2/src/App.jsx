import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl text-blue-600 font-bold underline mb-6">
        Integrate JSON Server API and Loader
      </h1>

      {loading ? (
        <h2 className="text-xl font-medium text-gray-500">Loading...</h2>
      ) : (
        userData.map((user) => (
          <div key={user.id} className="mb-4 p-4 border rounded bg-gray-50">
            <h3>
              <strong>Name:</strong> {user.name}
            </h3>
            <h3>
              <strong>Age:</strong> {user.age}
            </h3>
            <h3>
              <strong>ID:</strong> {user.id}
            </h3>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
