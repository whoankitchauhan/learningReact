import { useState } from "react";

import AddUser from "./addUser";
import DisplayUser from "./displayUser";

function App() {
  const [user, setUser] = useState();

  return (
    <div>
      <AddUser setUser={setUser}/>
      <hr />
      <DisplayUser user={user}/>
    </div>
  );
}

export default App;
