import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Page Not Found</h1>
      <Link to="/">Go to Home Page</Link>
      <h2>404 Error</h2>
    </div>
  );
};
export default PageNotFound;
