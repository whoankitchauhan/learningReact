import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [color, setColor] = useState("purple");
  const [fontSize, setFontSize] = useState("24px");
  const [theme, setTheme] = useState("light");

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: theme === "dark" ? "#121212" : "#f0f0f0",
        color: theme === "dark" ? "white" : "black",
        minHeight: "100vh",
        textAlign: "center",
        transition: "all 0.3s",
      }}
    >
      <h1>🕒 Custom Digital Clock</h1>

      <div style={{ margin: "20px 0" }}>
        <label>
          Select Background Color:
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <option value="purple">Purple</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </label>
      </div>

      <div style={{ margin: "20px 0" }}>
        <label>
          Select Font Size:
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <option value="24px">24px</option>
            <option value="32px">32px</option>
            <option value="40px">40px</option>
            <option value="48px">48px</option>
          </select>
        </label>
      </div>

      <div style={{ margin: "20px 0" }}>
        <label>
          Theme:
          <button
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              cursor: "pointer",
              backgroundColor: theme === "dark" ? "#444" : "#ddd",
            }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Toggle {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        </label>
      </div>

      <Clock color={color} fontSize={fontSize} />
    </div>
  );
}

export default App;
