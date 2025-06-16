import User from "./User";

function App() {
  function givingAlert(name) {
    alert("Function Called : "+ name );
  }
  return (
    <div>
      <h1>Called Parent Component Function from Child Component</h1>
      <User givingAlert={givingAlert} name="Ankit Chauhan" />
      <hr />
      <User givingAlert={givingAlert} name="Rahul Rana" />
      <hr /> 
      <User givingAlert={givingAlert} name="Banti Mota"/>
    </div>
  );
}

export default App;
