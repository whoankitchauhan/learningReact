import UserList from "./UserList";
import AddUser from "./AddUser";
import { Routes, Route, NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl text-blue-600 font-bold underline mb-6">
        {/* Making Routes and Pages for Add User and User List UI */}
        <NavLink to="/" className="mr-6 text-lg font-medium text-gray-700 hover:text-blue-600">Students List</NavLink>
        <NavLink to="/add" className="text-lg font-medium text-gray-700 hover:text-blue-600">Add User</NavLink>
      </h1>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<AddUser />} />
      </Routes>
    </div>
  );
}
export default App;
