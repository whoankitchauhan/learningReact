import { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");

  const createUser = async () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!age.trim() || isNaN(age)) {
      setAgeError("Valid age is required");
      isValid = false;
    } else {
      setAgeError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setEmailError("Valid email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!isValid) return;

    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "POST",
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

      <div className="w-full">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {nameError && <p className="text-red-600 text-sm mt-1">{nameError}</p>}
      </div>

      <div className="w-full">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter Age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        {ageError && <p className="text-red-600 text-sm mt-1">{ageError}</p>}
      </div>

      <div className="w-full">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {emailError && (
          <p className="text-red-600 text-sm mt-1">{emailError}</p>
        )}
      </div>

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
