import { Link } from "react-router-dom";

function Users() {
  const usersData = [
    {
      id: 1,
      name: "Ankit",
    },
    {
      id: 2,
      name: "Rahul",
    },
    {
      id: 3,
      name: "Rohit",
    },
    {
      id: 4,
      name: "Mohit",
    },
    {
      id: 5,
      name: "Sam",
    },
  ];
  return (
    <>
      <h1>User Details</h1>
      {usersData.map((item) => (
        <div key={item.id}>
          <h3>
            <Link to={`/users/${item.id}/${item.name}`}>{item.name}</Link>
          </h3>
        </div>
      ))} 
    </>
  );
}
export default Users;
