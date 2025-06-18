
function AddUser({setUser}) {
  return (
    <div>
      <h1>Add User Component</h1>
      <input
        onChange={(event) => setUser(event.target.value)}
        type="text"
        placeholder="Enter Username"
      />
    </div>
  );
}

export default AddUser;
