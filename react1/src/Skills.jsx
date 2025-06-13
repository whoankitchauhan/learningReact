import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (e) => {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== e.target.value));
    }
  };
  return (
    <div>
      <h3>Select Your Skills</h3>
      <input onChange={handleSkills} type="checkbox" id="PHP" value="PHP" />
      <label htmlFor="PHP">PHP</label>
      <br />

      <input onChange={handleSkills} type="checkbox" id="JAVA" value="JAVA" />
      <label htmlFor="JAVA">JAVA</label>
      <br />

      <input onChange={handleSkills} type="checkbox" id="UIUX" value="UIUX" />
      <label htmlFor="UIUX">UIUX</label>
      <br />
      <input onChange={handleSkills} type="checkbox" id="DSA" value="DSA" />
      <label htmlFor="DSA">DSA</label>
      <br />
      <h1>{skills.toString()}</h1>
    </div>
  );
}
export default Skills;
