import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const url = "http://localhost:3000/users/" + id;
  const navigate = useNavigate();

  const getUserData = async () => {
    console.log(id);
    console.log(url);
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const updateUser = async () => {
    let response = await fetch(url, {
      method: "put",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response) {
      toast.success("✅ User updated successfully!");
      setName("");
      setAge("");
      setEmail("");
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col items-start max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-4xl font-bold text-blue-600 w-full text-center">
        Edit User Details
      </h1>

      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="User Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="User Age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="User Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button
        className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-200"
        onClick={updateUser}
      >
        Update User
      </button>
    </div>
  );
}

export default EditUser;
