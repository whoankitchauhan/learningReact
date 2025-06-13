function App() {
  const userData = [
    {
      id: 1,
      name: "Ankit",
      age: 23,
      email: "ankit@gmail.com",
    },
    {
      id: 2,
      name: "Tanjal",
      age: 18,
      email: "tanjal@gmail.com",
    },
    {
      id: 3,
      name: "Ram",
      age: 19,
      email: "ram@gmail.com",
    },
    {
      id: 4,
      name: "Rohan",
      age: 23,
      email: "rohan@gmail.com",
    },
  ];
  return (
    <div>
      <h1>Loop in JSX with Map Function </h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>EMail</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Printed Manually</h2>
      <table border="1">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>EMail</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ankit</td>
            <td>13</td>
            <td>ankit@gmail.com</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Ankit</td>
            <td>13</td>
            <td>ankit@gmail.com</td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>Ankit</td>
            <td>13</td>
            <td>ankit@gmail.com</td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>Ankit</td>
            <td>13</td>
            <td>ankit@gmail.com</td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>Ankit</td>
            <td>13</td>
            <td>ankit@gmail.com</td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>Ankit</td>
            <td>13</td>
            <td>ankit@gmail.com</td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>Ankit</td>
            <td>13</td>
            <td>ankit@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
