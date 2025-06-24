import { Link, useParams } from "react-router-dom";

function UserDetails() {
    const paramsData = useParams();
  return (
    <>
      <h1>User Details Page</h1>
      <h1>User id : {paramsData.id}</h1>
      <h1>User id : {paramsData.name}</h1>

      <h3><Link to="/users">Back to All user</Link></h3>

    </>
  );
}
export default UserDetails;
