import { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    console.log("Name : ", { name });
    console.log("Age : ", { age });
    console.log("Email : ", { email });
    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response) {
      alert("New User Added : " + name);
      setName("");
      setAge("");
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col items-start max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-4xl font-bold text-blue-600">Add New User</h1>

      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Enter Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Enter Age"
        onChange={(event) => setAge(event.target.value)}
      />
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Enter Email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
        onClick={createUser}
      >
        Submit
      </button>
    </div>
  );
}

export default AddUser;
