import { useState } from "react";

function App() {
  const [data, setData] = useState(["Ankit", "Rahul", "Manish"]);

  const [dataInDetails, setDataInDetails] = useState([
    {
      name: "Ankit",
      age: 23,
      email: "ankit@gmail.com",
    },
    {
      name: "Aryan",
      age: 23,
      email: "rahul@gmail.com",
    },
    {
      name: "Rohan",
      age: 23,
      email: "manish@gmail.com",
    },
  ]);

  const handleUser = (lastName) => {
    setData((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = lastName;
      return updated;
    });
  };

  const handleAge = (lastAge) => {
    setDataInDetails((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        ...updated[updated.length - 1],
        age: Number(lastAge), // ensure it's a number
      };
      return updated;
    });
  };

  return (
    <div>
      <h1>Updating Array in States</h1>

      <input
        type="text"
        onChange={(e) => handleUser(e.target.value)}
        placeholder="Update Last Name"
      />
      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <hr />

      <input
        type="number"
        onChange={(e) => handleAge(e.target.value)}
        placeholder="Update Last User Age"
      />
      {dataInDetails.map((item, index) => (
        <h3 key={index}>
          {item.name}, {item.age}, {item.email}
        </h3>
      ))}
    </div>
  );
}

export default App;
