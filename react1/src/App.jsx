import College from "./Colllege";

function App() {
  const college = [
    {
      name: "VIPS",
      location: "Pitampura",
      package: "10LPA",
      student: [
        { name: "Ankit", rollNo: 10, email: "ankit@gmail.com" },
        { name: "Rahul", rollNo: 11, email: "rahul@gmail.com" },
        { name: "Sita", rollNo: 12, email: "sita@gmail.com" },
      ],
    },
    {
      name: "IIIT",
      location: "Delhi",
      package: "55LPA",
      student: [
        { name: "Rohan", rollNo: 21, email: "rohan@gmail.com" },
        { name: "Mohan", rollNo: 22, email: "mohan@gmail.com" },
        { name: "Geeta", rollNo: 23, email: "geeta@gmail.com" },
      ],
    },
    {
      name: "MAIT",
      location: "Mumbai",
      package: "95LPA",
      student: [
        { name: "Priya", rollNo: 31, email: "priya@gmail.com" },
        { name: "Arjun", rollNo: 32, email: "arjun@gmail.com" },
        { name: "Ravi", rollNo: 33, email: "ravi@gmail.com" },
      ],
    },
  ];
  return (
    <div>
      <h1>Nested Looping With Component</h1>

      {college.map((data, index) => (
        <div key={index}>
          <College data={data}/>
        </div>
      ))}
    </div>
  );
}

export default App;
