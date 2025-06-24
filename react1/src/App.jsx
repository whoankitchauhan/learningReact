import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import CollegeDetails from "./CollegeDetails";
import Users from "./Users";
import UserDetails from "./userDetails";

function App() {
  return (
    <Routes>
      {/* ✅ Layout route using NavBar with nested pages */}
      <Route element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/users/list?" element={<Users />} />
        <Route path="/users/:id/:name" element={<UserDetails />} />
        <Route path="india">
          <Route path="/india/user">
            <Route path="/india/user/about" element={<About />} />
            <Route path="/india/user/contact" element={<Contact />} />
          </Route>
        </Route>
      </Route>

      {/* ✅ Nested college route with index as Student */}
      <Route path="/college" element={<College />}>
        <Route index element={<Student />} /> {/* renders by default */}
        <Route path="department" element={<Department />} />
        <Route path="collegeDetails" element={<CollegeDetails />} />
      </Route>

      {/* ✅ 404 page for unmatched routes */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
