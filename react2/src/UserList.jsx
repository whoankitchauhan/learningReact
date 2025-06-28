import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:3000/users";
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    let response = await fetch(url + "/" + id, {
      method: "delete",
    });
    response = await response.json();
    console.log(response);
    getUserData();
  };
  const editUser = (id) => {
    navigate("/edit/"+id);
  };
  return (
    <div className="p-10">
      {loading ? (
        <h2 className="text-xl font-medium text-gray-500">Loading...</h2>
      ) : (
        userData.map((user) => (
          <div
            key={user.id}
            className="mb-4 p-4 border rounded bg-gray-50 flex justify-between items-center"
          >
            {/* Left: User Info */}
            <div className="text-left">
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
            <div>
              <button
                className="px-4 py-2 m-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                onClick={() => editUser(user.id)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 m-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default UserList;
