import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import CollegeDetails from "./CollegeDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="collegeDetails" element={<CollegeDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}

export default App;
