import { useState } from "react";

function App() {
  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <h1>Handle radio and Dropdown</h1>
      <h3>Select Gender</h3>
      <input
        onChange={(e) => setGender(e.target.value)}
        type="radio"
        name="gender"
        id="Male"
        value={"Male"}
        checked={gender == "Male"}
      />
      <label htmlFor="Male">Male</label>

      <input
        onChange={(e) => setGender(e.target.value)}
        type="radio"
        name="gender"
        id="Female"
        value={"Female"}
        checked={gender == "Female"}
      />
      <label htmlFor="Female">Female</label>
      <h2>Selected Gender : {gender}</h2>
      <br />
      <br />
      <h4>Select City</h4>

      <select value={city} name="" id="" onChange={handleChange}>
        <option value="">-- Select City --</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Kolkata">Kolkata</option>
      </select>
      <h2>Selected City : {city}</h2>
    </div>
  );
}

export default App;
