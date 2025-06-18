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
    data[data.length - 1] = lastName;
    setData([...data]);
  };
  const handleAge = (lastAge) => {
    dataInDetails[dataInDetails.length - 1].age = lastAge;
    setDataInDetails([...dataInDetails]);
  };
  return (
    <div>
      <h1>Updating Array in States</h1>
      <input
        type="text"
        onChange={(e) => handleUser(e.target.value)}
        placeholder="Enter Last Name"
      />
      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      <hr />
      <input
        type="text"
        onChange={(e) => handleAge(e.target.value)}
        placeholder="Enter Last User Age"
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
