import { useState, useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 5000));
    });
  };

  return (
    <div>
      <h1>useTransition Hook</h1>
      {isPending ? (
        <img
          style={{ width: "100px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
          alt=""
        />
      ) : null}
      <button disabled={isPending} onClick={handleClick}>
        {isPending ? "Pending..." : "Click"}
      </button>
    </div>
  );
}

export default App;
