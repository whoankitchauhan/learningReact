import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

function App() {
  const [subject, setSubject] = useState('');
  const handleChange = (event) => {
    setSubject(event.target.value);
  };
  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select value={subject} onChange={handleChange}>
          <option value="">Select Subject</option>
          <option value="DBMS">DBMS</option>
          <option value="JAVA">JAVA</option>
          <option value="C++">C++</option>
          <option value="PYTHON">PYTHON</option>
        </select>
        <h1>Context API</h1>
        <button onClick={()=>setSubject('')}>Clear Subject</button>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;
