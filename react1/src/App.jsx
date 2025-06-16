import { useFormStatus } from "react-dom";
function App() {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submit");
  };

  function Customerform() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <form action={handleSubmit}>
          <input type="text" placeholder="Enter Username" />
          <br />
          <input type="password" placeholder="Enter Password" />
          <br />
          <button disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    );
  }
  return (
    <div>
      <h1>UseFormStatus</h1>
      <Customerform />
    </div>
  );
}

export default App;
