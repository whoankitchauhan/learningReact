import { useActionState } from "react";

function App() {
  const handleSubmit = async (prevdata, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    console.log("HandleSubmit Function Called");
    await new Promise((res) => setTimeout(res, 3000));
    console.log("Name : ", name);
    console.log("Password : ", password);
    if (name && password) {
      return {
        message: "Data Submitted",
        name,
        password,
      };
    } else {
      return {
        error: "Enter Both the Fields",
        name,
        password,
      };
    }
  };
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);
  return (
    <div>
      <h1>useActionState Hook </h1>
      <form action={action}>
        <input
          defaultValue={data?.name}
          type="text"
          placeholder="Enter Name"
          name="name"
        />
        <br />
        <br />
        <input
          defaultValue={data?.name}
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <br />
        <br />
        <button disabled={pending}>Submit Data</button>
        {pending && <p style={{ color: "blue" }}>Submitting...</p>}
        <br />
        <br />
      </form>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}

      <h3>Name : {data?.name}</h3>
      <h3>Password : {data?.password}</h3>
    </div>
  );
}

export default App;
