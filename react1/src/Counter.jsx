import { useEffect } from "react";

function Counter({ counter, data }) {
  const onceOnly = () => {
    console.log("Function Callled");
  };

  useEffect(() => {
    onceOnly();
  },[counter]);
  return (
    <div>
      <h1>Counter Value : {counter}</h1>
      <h1>Data Value : {data}</h1>
    </div>
  );
}
export default Counter;
