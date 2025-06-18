import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "Ankit Chauhan",
    address: {
      city: "Delhi",
      country: "India",
    },
  });
  const handleName = (inputName) => {
    setData((prevData) => ({
      ...prevData,
      name: inputName,
    }));
  };

  const handleCity = (inputCity) => {
    setData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        city: inputCity,
      },
    }));
  };
  return (
    <div>
      <h1>Updating Objects in States</h1>
      <input
        type="text"
        onChange={(event) => handleName(event.target.value)}
        placeholder="Enter User Name"
      />
      <hr />
      <input
        type="text"
        onChange={(event) => handleCity(event.target.value)}
        placeholder="Enter City"
      />
      <h3>Name: {data.name}</h3>
      <h3>City: {data.address.city}</h3>
      <h3>Country: {data.address.country}</h3>
    </div>
  );
}

export default App;
