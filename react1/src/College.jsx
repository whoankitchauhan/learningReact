import { Link, Outlet } from "react-router-dom";


function College() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>College Page</h1>
      <Link className="Coll-link" to="student">
        Student
      </Link>
      <Link className="Coll-link" to="department">
        Department
      </Link>
      <Link className="Coll-link" to="collegeDetails">
        College Details
      </Link>
      <Outlet />
    </div>
  );
}

export default College;
