import UserList from "./UserList";
import AddUser from "./AddUser";
import { Routes, Route, NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import EditUser from "./EditUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl text-blue-600 font-bold underline mb-6">
        <NavLink
          to="/"
          className="mr-6 text-lg font-medium text-gray-700 hover:text-blue-600"
        >
          Students List
        </NavLink>
        <NavLink
          to="/add"
          className="text-lg font-medium text-gray-700 hover:text-blue-600"
        >
          Add User
        </NavLink>
      </h1>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
      <ToastContainer position="top-center" />

    </div>
  );
}
export default App;
