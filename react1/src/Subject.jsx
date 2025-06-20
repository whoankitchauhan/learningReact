import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject() {
  const subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: "pink", padding: 10 }}>
      <h1>Selected Subject: {subject || "None"}</h1>
    </div>
  );
}

export default Subject;
