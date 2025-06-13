import { useEffect, useState } from "react";

function Clock({ color, fontSize }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      setDate(now.toDateString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: color,
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "fit-content",
        margin: "auto",
        fontSize: fontSize,
        fontWeight: "bold",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div>{time}</div>
      <div style={{ fontSize: "16px", marginTop: "10px" }}>{date}</div>
    </div>
  );
}

export default Clock;
