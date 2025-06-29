import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const url = "http://localhost:3000/users";
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!userToDelete) return;

    try {
      let response = await fetch(`${url}/${userToDelete.id}`, {
        method: "DELETE",
      });
      response = await response.json();
      toast.success("User deleted successfully");
      getUserData();
    } catch (err) {
      toast.error("Failed to delete user");
    } finally {
      setShowModal(false);
      setUserToDelete(null);
    }
  };

  const confirmDelete = (user) => {
    setUserToDelete(user);
    setShowModal(true);
  };

  const editUser = (id) => {
    navigate("/edit/" + id);
  };

  // Filtered users based on search
  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Students List</h1>

      {/* 🔍 Search Box */}
      <input
        type="text"
        placeholder="Search by name..."
        className="mb-6 w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <h2 className="text-xl font-medium text-gray-500">Loading...</h2>
      ) : filteredUsers.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        filteredUsers.map((user) => (
          <div
            key={user.id}
            className="mb-4 p-4 border rounded bg-gray-50 flex justify-between items-center"
          >
            <div className="text-left">
              <h3>
                <strong>ID:</strong> {user.id}
              </h3>
              <h3>
                <strong>Name:</strong> {user.name}
              </h3>
              <h3>
                <strong>Age:</strong> {user.age}
              </h3>
              <h3>
                <strong>Email:</strong> {user.email}
              </h3>
            </div>

            <div>
              <button
                className="px-4 py-2 m-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                onClick={() => editUser(user.id)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 m-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                onClick={() => confirmDelete(user)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {/* Delete Confirmation Modal */}
      {showModal && userToDelete  && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4">
              Delete <span className="text-red-600">{userToDelete.name}</span>?
            </h2>
            <p className="text-gray-700 mb-6">
              This action cannot be undone. Are you sure?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;
