import { useEffect } from "react";

function Counter({ counter, data }) {
  const onceOnly = () => {
    console.log("Function Callled");
  };

  useEffect(() => {
    onceOnly();
  }, [counter, data]);

  useEffect(() => {
    return () => {
      console.log("Component Unmounted");
    };
  }, []);
  return (
    <div>
      <h1>Counter Value : {counter}</h1>
      <h1>Data Value : {data}</h1>
    </div>
  );
}
export default Counter;
