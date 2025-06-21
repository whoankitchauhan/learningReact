import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="*" element={<PageNotFound/>}/> */}
        <Route path="/*" element={<Navigate  to="/contact"/>}/>
      </Routes>
    </>
  );
}

export default App;
