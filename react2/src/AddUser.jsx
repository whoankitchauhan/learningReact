import { useState } from "react";
import { toast } from "react-toastify";

function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateName = (value = name) => {
    if (!value.trim()) {
      setNameError("Name is required");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const validateAge = (value = age) => {
    if (!value.trim() || isNaN(age)) {
      setAgeError("Valid age is required");
      return false;
    } else {
      setAgeError("");
      return true;
    }
  };

  const validateEmail = (value = email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim() || !emailRegex.test(email)) {
      setEmailError("Valid email is required");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

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
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const url = "http://localhost:3000/users";
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ name, age, email }),
      });
      response = await response.json();
      if (response) {
        setSuccessMessage("✅ User added successfully!");
        toast.success("✅ User added successfully!");

        setName("");
        setAge("");
        setEmail("");
      }
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user");
    } finally {
      setIsSubmitting(false);
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
          onChange={(event) => {
            setName(event.target.value);
            validateName(event.target.value);
          }}
          // onBlur={validateName}
        />
        {nameError && <p className="text-red-600 text-sm mt-1">{nameError}</p>}
      </div>

      <div className="w-full">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter Age"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
            validateAge(event.target.value);
          }}
          // onBlur={validateAge}
        />
        {ageError && <p className="text-red-600 text-sm mt-1">{ageError}</p>}
      </div>

      <div className="w-full">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            validateEmail(event.target.value);
          }}

          // onBlur={validateEmail}
        />
        {emailError && (
          <p className="text-red-600 text-sm mt-1">{emailError}</p>
        )}
      </div>

      <button
        className={`mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded transition duration-200 ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
        onClick={createUser}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {successMessage && (
        <p className="text-green-600 text-sm font-medium mt-2">
          {successMessage}
        </p>
      )}
    </div>
  );
}

export default AddUser;
